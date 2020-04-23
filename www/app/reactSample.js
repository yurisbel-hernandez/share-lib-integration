define(['react', 'react-dom', 'fantasy', 'bootstrap'], function (React, ReactDom, Fantasy, Bootstrap) {
  return {
      getCheck: function () {
        console.log(Fantasy);
        console.log(Bootstrap);
        const CheckBox = Fantasy.CheckBox;
        const Button = Bootstrap.Button;
        console.log(CheckBox)
        console.log(CheckBox.default)
        const CheckBoxProps = {
          label: "Check",
          isChecked: false,
          onCheckboxChange: () => console.log('Check Change')
        };
        return React.createElement(CheckBox , CheckBoxProps, null);
      }
  };
});
