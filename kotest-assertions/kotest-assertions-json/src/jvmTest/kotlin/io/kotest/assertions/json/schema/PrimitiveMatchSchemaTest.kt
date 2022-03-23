package io.kotest.assertions.json.schema

import io.kotest.assertions.shouldFail
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.ints.beEven
import io.kotest.matchers.should
import io.kotest.matchers.shouldBe

class PrimitiveMatchSchemaTest : FunSpec(
   {
      test("invalid json") {
         shouldFail {
            "[" shouldMatchSchema jsonSchema { obj() }
         }.message shouldBe """
            $ => Tried to parse actual as JSON, but it failed
         """.trimIndent()
      }


      context("boolean schemas") {
         val boolSchema = jsonSchema { boolean() }

         test("boolean values match bool schema") {

            "true" shouldMatchSchema boolSchema
            "false" shouldMatchSchema boolSchema
         }

         test("number mismatches") {
            shouldFail {
               "0" shouldMatchSchema boolSchema
            }.message shouldBe """
               $ => Expected boolean but was an integer
            """.trimIndent()
         }
      }

      context("String schema") {
         val schema = jsonSchema { string() }

         test("string matches string schema") {
            "\"hello, world!\"" shouldMatchSchema schema
         }

         test("boolean does not match string schema") {
            shouldFail { "false" shouldMatchSchema schema }.message shouldBe """
               $ => Expected string but was a boolean
            """.trimIndent()
         }
      }

      context("integer schemas") {
         val intSchema = jsonSchema { integer() }

         test("integers match int schema") {
            "5" shouldMatchSchema intSchema
            "0" shouldMatchSchema intSchema
            "-1" shouldMatchSchema intSchema
         }

         test("Non-number causes failure") {
            shouldFail { "false" shouldMatchSchema intSchema }.message shouldBe """
               $ => Expected integer but was a boolean
            """.trimIndent()
         }

         test("Decimals cause failure") {
            shouldFail {
               "3.7" shouldMatchSchema intSchema
            }.message shouldBe """
               $ => Expected integer but was a decimal
            """.trimIndent()
         }

         test("String cause failure" ){
            shouldFail {
               "\"5\"" shouldMatchSchema intSchema
            }.message shouldBe """
               $ => Expected integer but was a string
            """.trimIndent()
         }

         test("negated assertion works") {
            "false" shouldNotMatchSchema intSchema
         }
      }
   }
)

fun main() {
   val petSchema = jsonSchema {
      obj {
         withProperty("name") { string() }
         withProperty("age") {
            integer {
               beEven()
            }
         }
      }
   }

   val personSchema = jsonSchema {
      obj {
         withProperty("name") { string() }
         withProperty("age") { integer() }
         withProperty("pets") { array { petSchema.root } }
      }
   }

   val personList = jsonSchema { array { personSchema.root } }
}