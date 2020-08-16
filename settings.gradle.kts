enableFeaturePreview("GRADLE_METADATA")

pluginManagement {
   repositories {
      mavenCentral()
      gradlePluginPortal()
      maven ("https://dl.bintray.com/kotlin/kotlin-eap")
      jcenter()
   }
}

include("kotest-common")
include("kotest-framework:kotest-framework-api")
include("kotest-framework:kotest-framework-engine")
include("kotest-framework:kotest-framework-discovery")
include("kotest-assertions:kotest-assertions-shared")
include("kotest-assertions:kotest-assertions-core")
include("kotest-assertions:kotest-assertions-arrow")
include("kotest-assertions:kotest-assertions-json")
include("kotest-assertions:kotest-assertions-ktor")
include("kotest-assertions:kotest-assertions-jsoup")
include("kotest-assertions:kotest-assertions-konform")
include("kotest-assertions:kotest-assertions-compiler")
//include("kotest-assertions:kotest-assertions-klock")
include("kotest-assertions:kotest-assertions-sql")
include("kotest-property")
include("kotest-property:kotest-property-arrow")
include("kotest-runner:kotest-runner-junit5")
include("kotest-runner:kotest-runner-junit4")
include("kotest-extensions")
include("kotest-extensions:kotest-extensions-allure")
include("kotest-extensions:kotest-extensions-http")
include("kotest-extensions:kotest-extensions-junitxml")
include("kotest-extensions:kotest-extensions-koin")
include("kotest-extensions:kotest-extensions-mockserver")
include("kotest-extensions:kotest-extensions-spring")
include("kotest-extensions:kotest-extensions-testcontainers")
include("kotest-extensions:kotest-extensions-junit5extensions")
include("kotest-plugins:kotest-plugins-pitest")
include("kotest-tests:kotest-tests-core")
include("kotest-tests:kotest-tests-timeout")
include("kotest-tests:kotest-tests-projectlistener")
include("kotest-tests:kotest-tests-autoscan")
include("kotest-tests:kotest-tests-junitxml")
include("kotest-tests:kotest-tests-parallelism")
include("kotest-examples:kotest-examples-javascript")
include("kotest-examples:kotest-examples-jvm")
include("kotest-examples:kotest-examples-allure")
include("kotest-examples:kotest-examples-spring-webflux")
