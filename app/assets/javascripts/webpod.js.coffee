console.log("loading the coffee!")

class WebpodRouter extends Backbone.Router
  initialize: (options) ->
    # pass

  # The list of routes this router can handle.
  routes:
    "": "helloWorld"
    "hello_world": "helloWorld"
    "hello_person/:name": "helloPerson"

  helloWorld: ->
    console.log("routed to helloWorld")
    $("#webpod").html("Hello world!")
    # @render new PlotWatt.Widgets.HelloWorld.Views.Initial()

  helloPerson: (name)->
    console.log("routed to helloPerson: #{name}")
    $("#webpod").html("Hello #{name}!")    
    # @render new PlotWatt.Widgets.HelloWorld.Views.Results({ name: name })

  # Render the given view inside the default element.
  # render: (view)->
    # $("#pw-widget-content").html(view.render().el)

window.router = new WebpodRouter()

console.log("set the router to", window.router)

$ ->
  Backbone.history.start()