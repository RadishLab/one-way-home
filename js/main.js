
var map = new Datamap({
  element: document.getElementById('map'),
  scope: 'usa',
  geographyConfig: {
    highlightOnHover: false,
    popupOnHover: false
  },
  fills: {
    defaultFill: 'rgba(211,209,167,0.9)' //any hex, color name or rgb/rgba value
  }
});
