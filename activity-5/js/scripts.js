(function() {


    var data = [
        {
            name: 'atom-beautify',
            description: 'The atom-beautify package will clean up your code and make it more readable.',
            author: 'Glavin001',
            downloads: 7261944,
            stars: 5306,
            selector: 'p1'
        },
        {
            name: 'Highlight Selected',
            description: 'The Highlight Selected package is super simple: it highlights the current word selected on double click.',
            author: 'richrace',
            downloads: 2307878,
            stars: 3182,
            selector: 'p2'
        },
        {
            name: 'Pigments',
            description: 'The Pigments package displays colors in project files, wherever it parses a color to be.',
            author: 'abe33',
            downloads: 3036795,
            stars: 3708,
            selector: 'p3'
        }
    ];

    function Package(data) {
        this.name = data.name;
        this.description = data.description;
        this.author = data.author;
        this.downloads = data.downloads;
        this.stars = data.stars;
        this.selector = data.selector;

        this.getFormattedDownloads = function () {
            return this.downloads.toLocaleString();
        }

        this.getFormattedStars = function () {
            return this.stars.toLocaleString();
        }
    }

    var getTodaysDate = function() {
        var today =  new Date();
        return today.toDateString();
    }

    var getEl = function (id) {
        return document.getElementById(id);
    }

    var writePackageInfo = function(package) {
        var selector = package.selector,
            nameEl = getEl(selector + '-name'),
            descEl = getEl(selector + '-description'),
            authorEl = getEl(selector + '-author'),
            downloadsEl = getEl(selector + '-downloads'),
            starsEl = getEl(selector + '-stars');

            nameEl.textContent = package.name;
            descEl.textContent = package.description;
            authorEl.textContent = package.author;
            downloadsEl.textContent = package.getFormattedDownloads();
            starsEl.textContent =  package.getFormattedStars();
    }

    dateEl = getEl('date');
    dateEl.textContent = getTodaysDate();


    for (var i = 0; i < data.length; i++) {
        var package = new Package(data[i]);
        writePackageInfo(package);
    }
    
}());

