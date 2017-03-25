const terminal = require('terminal-kit').terminal;

function terminate() {
    terminal.grabInput(false);
    setTimeout(function() {
        process.exit()
    }, 100);
};

terminal.grabInput({ mouse: 'button' });

terminal.clear();

terminal.on('key', function(name, matches, data) {

    if (name.match(/^[A-Za-z]$/)) {
        terminal(name);
    };

    if (name === 'ENTER') {
        terminal('\n');
    };

    if (name === 'BACKSPACE') {
        terminal.backDelete('');
    };

    if (name === 'CTRL_C') {
        terminate();
    };

    terminal.saveCursor();
});

terminal.on('resize', function(width, height) {
    terminal.restoreCursor();
})

terminal.on('terminal', function(name, data) {});

terminal.on('mouse', function(name, data) {});
