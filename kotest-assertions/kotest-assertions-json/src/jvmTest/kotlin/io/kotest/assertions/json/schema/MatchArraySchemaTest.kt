package io.kotest.assertions.json.schema

import io.kotest.assertions.shouldFail
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.shouldBe
import org.intellij.lang.annotations.Language

class MatchArraySchemaTest : FunSpec(
   {
      fun json(@Language("JSON") raw: String) = raw
      val intArray = jsonSchema { array { integer() } }
      val decimalArray = jsonSchema { array { decimal() } }

      test("Array with correct elements match") {
         """[1, 2]""" shouldMatchSchema intArray
      }

      test("Problems compound") {
         shouldFail { """[1, 2]""" shouldMatchSchema decimalArray }.message shouldBe """
            $[0] => Expected decimal but was an integer
            $[1] => Expected decimal but was an integer
         """.trimIndent()
      }
   }
)