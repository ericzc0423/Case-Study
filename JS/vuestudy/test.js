new Vue ({
    el: '#vue-app',
    data: {
        name: '',
        last: '',
        index: 0,
        grade: 0,
        arr: []
    },

    methods: {
        add: function (e) {
            this.arr.push({first: this.name, lastn: this.last, index: this.index, grade: this.grade});
            console.log(1);
        },
        saveFile: function() {
            const data = JSON.stringify(this.arr)
            const blob = new Blob([data], {type: 'text/plain'})
            const e = document.createEvent('MouseEvents'),
                a = document.createElement('a');
            a.download = "test.json";
            a.href = window.URL.createObjectURL(blob);
            a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
            e.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            a.dispatchEvent(e);
        }
    }
    });