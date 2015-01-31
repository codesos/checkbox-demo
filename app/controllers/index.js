var checkBoxCtr = Alloy.createController("commons/checkbox");
var checkBoxView = checkBoxCtr.getView();
checkBoxView.right="5%";
$.index.add(checkBoxView);
$.checkbox.init();
$.mainWin.open();
