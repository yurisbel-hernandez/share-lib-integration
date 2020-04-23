// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
    baseUrl: 'lib',
    paths: {
        app: '../app',
        react: 'https://unpkg.com/react@16.13.1/umd/react.development',
        'react-dom': 'https://unpkg.com/react-dom@16.13.1/umd/react-dom.development',
        fantasy: 'fantasy-client-shared-lib',
        bootstrap: 'react-bootstrap'
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['app/main']);
requirejs(['react', 'react-dom', 'fantasy', 'bootstrap'], function (React, ReactDOM, Fantasy, Bootstrap) {
    const CheckBox = Fantasy.CheckBox;
    const CheckBoxProps = {
      label: "Check",
      isChecked: false,
      onCheckboxChange: () => console.log('Check Change')
    };

	ReactDOM.render(
        React.createElement(CheckBox , CheckBoxProps, null),
        document.getElementById('root')
    );
});
