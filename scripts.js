new Vue({
    el: '#app',
    data: {
        settings: {
            'name': '',
            'options': [],
            'alert': {
                'show': false,
                'type': '',
                'text': ''
            }
        },
        calculator: {
            type: 'Pixels to Rem',
            default: 15,
            value: '',
            result: ''
        },
        variables: variablesjson
    },
    filters: {
        convertToName: function (val) {
            if (val) {
                return val.replace('$', '').replace(/-/g, ' ');
            }
        },
        convertToNameNospace: function (val) {
            if (val) {
                return val.replace('$', '').replace(/-/g, ' ').replace(' ', '');
            }
        }
    },
    mounted() {
        var that = this;
        axios.get('http://localhost:4000/get-themes').then(function (response) {
            that.settings.options = response.data
        });
    },
    watch: {
        'calculator.value': function (val) {
            if (this.calculator.type === 'Pixels to Rem') {
                this.calculator.result = (this.calculator.value / this.calculator.default).toFixed(2) + 'rem';
            } else {
                this.calculator.result = (this.calculator.value * this.calculator.default) + 'px'
            }
        }
    },
    methods: {
        createNewProject: function () {
            let that = this;
            var ref = this.$refs['pname'];
            this.settings.name = ref.value;

            if (ref.value) {

                data = {
                    name: ref.value,
                    variables: that.variables
                }

                console.log(data)

                axios.post('http://localhost:4000/create', data)
                    .then(response => {
                        console.log(response)
                        that.alert(response.data)
                        setTimeout(() => {
                            document.getElementById('output').contentWindow.location.reload();
                        }, 1000)
                    })
                    .catch(error => {
                        console.log(error)
                        that.alert(response.data)
                    });

            }

        },
        getTheme: function (e) {
            var that = this;

            var ref = e.target.value;
            data = {
                name: ref
            }
            if (ref) {

                axios.post('http://localhost:4000/get-theme', data).then(function (response) {
                    that.settings.name = response.data[0].name;
                    var vars = response.data[0].data
                    if (vars) {
                        var source = that.variables;
                        var data = JSON.parse(vars);
                        // that.variables = Object.assign(source, data)
                        for (group in data) {
                            if (JSON.stringify(source[group]) === JSON.stringify(data[group])) {
                                source[group] = data[group]
                            } else {
                                for (variable in data[group]) {
                                    if (source[group][variable]) {
                                        if (JSON.stringify(source[group][variable]) === JSON.stringify(data[group][variable])) {
                                            source[group][variable] = data[group][variable]
                                        } else {
                                            source[group][variable].value = data[group][variable].value
                                        }
                                    }
                                }
                            }
                        }
                    }
                    that.changeOutput();
                });
            }
        },

        saveTheme: function () {
            let that = this;
            var data = {
                name: this.settings.name,
                variables: JSON.stringify(this.variables)
            }
            axios.post('http://localhost:4000/save', data).then(function (response) {
                that.alert(response.data)
            });

        },
        deleteTheme: function () {
            var that = this;
            var data = {
                name: this.settings.name,
            }
            axios.post('http://localhost:4000/delete', data)
                .then(response => {
                    console.log(response)
                    that.alert(response.data)
                    that.settings.name = '';
                    // window.location.reload()
                })
                .catch(error => {
                    console.log(error)
                    that.alert(response.data)
                });

        },
        notHaveEmptyValues: function (group) {
            var obj = this.variables[group];

            for (variable in obj) {
                if (obj[variable].value) {
                    return true;
                }
            }
            return false;
        },
        changeOutput: function () {
            var that = this;
            setTimeout(() => {
                // var data = this.$refs['data'].innerText;
                var data = that.variables
                console.log(data)
                console.log('sending to api...')
                axios.post('http://localhost:4000/update-output', data, {
                        headers: {
                            // 'Content-Type': 'text/plain'
                        }
                    }).then(response => {
                        console.log(response)
                        that.alert(response.data)
                        setTimeout(() => {
                            document.getElementById('output').contentWindow.location.reload();
                        }, 1000)
                    })
                    .catch(error => {
                        console.log(error)
                        that.alert(response.data)
                    });


            }, -1)

        },
        refreshOutput() {
            document.getElementById('output').contentWindow.location.reload();
        },
        alert(alert) {
            let that = this
            console.log(alert)
            this.settings.alert = {
                'show': true,
                'type': alert.type,
                'text': alert.text
            }
            setTimeout(function () {
                that.settings.alert = {
                    'show': true,
                    'type': '',
                    'text': ''
                }
            }, 3000)
        }
    },
});