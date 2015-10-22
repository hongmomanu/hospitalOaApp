(require 'cljs.build.api)

(cljs.build.api/watch "src"
  {:main 'hospitaloaapp.controllers.main
   :output-to "out/main.js"})
