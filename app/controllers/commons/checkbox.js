var Commons =
{
  CheckBox:
  {
    View:
    {
      button: $.checkboxButton
    },
    Var:
    {
      buttonOptions:
      {
        backgroundUncheckedImage: '/images/checkbox/checkbox-icon-unchecked.png',
        backgroundCheckedImage: '/images/checkbox/checkbox-icon-checked.png',
        value: false
      },
    },
    Controller:
    {
    }
  }
};

var self = Commons.CheckBox;
Commons.CheckBox.Controller =
{
  unchecked: function()
  {
    self.View.button.backgroundImage = self.Var.buttonOptions.backgroundUncheckedImage;
    self.Var.buttonOptions.value = false;
  },
  checked: function()
  {
    self.View.button.backgroundImage = self.Var.buttonOptions.backgroundCheckedImage;
    self.Var.buttonOptions.value = true;
  },

  onButtonClicked: function(e)
  {
    self.Var.buttonOptions.value?self.Controller.unchecked():self.Controller.checked();
  },

  change: function()
  {
    self.Var.buttonOptions.value?self.Controller.unchecked():self.Controller.checked();
  },

  initialize: function()
  {
    self.View.button.addEventListener("click", self.Controller.onButtonClicked);
    $.on("commons:checkbox:checked", self.Controller.onButtonClicked);
  }
};
self.Controller.initialize();

exports.value = function()
{
  return self.Var.buttonOptions.value;
};

exports.unchecked = function()
{
  self.Controller.unchecked();
};
exports.checked = function()
{
  self.Controller.checked();
};
exports.change = function()
{
  self.Controller.change();
};

