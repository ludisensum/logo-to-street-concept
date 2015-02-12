class StreetScene extends Ember.Component
  classNames: 'street-scene'

  attributeBindings: 'style'
  style: ~>
    if @someState
      ''
    else
      'transform: scale(7) translate(35px, 250px)'

  click: ->
    @toggleProperty 'someState'

`export default StreetScene;`
