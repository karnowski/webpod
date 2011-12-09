class WebpodRouter extends Backbone.Router
  # The list of routes this router can handle.
  routes:
    "": "helloWorld"
    "hello_world": "helloWorld"
    "hello_person/:name": "helloPerson"

  helloWorld: ->
    console.log("routed to helloWorld")
    $("#webpod").html("Hello world!")

  helloPerson: (name)->
    console.log("routed to helloPerson: #{name}")
    $("#webpod").html("Hello #{name}!")    


# for console debugging
window.router = new WebpodRouter()

$ ->
  Backbone.history.start()
