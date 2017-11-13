var pageBar = new Vue({
    el: '#wrapper',
    data: {
        query: '',
        newposts: [{
            image: '640x480.png',
            link: '#',
            head: 'How sit amet, consectetur',
            author: ' Author Name',
            date: 'Oct 25, 2017',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit ligula velit, vel mollis leo congue eget. '
        }, {
            image: '640x480.png',
            link: '#',
            head: 'Can varius finibus',
            author: ' Author Name',
            date: 'Sep 20, 2017',
            content: ' Maecenas varius finibus mi, vitae sodales purus aliquam ut. Proin ut hendrerit mauris. Nullam arcu diam, tincidunt non rutrum sed, tincidunt varius metus. '
        },  {
            image: '640x480.png',
            link: '#',
            head: 'Vestibulum at quam malesuada',
            author: ' Author Name',
            date: 'Aug 5, 2017',
            content: 'Vestibulum at quam malesuada massa imperdiet dictum. Nam eu magna purus. Nunc aliquet nunc id dui varius, at iaculis elit auctor.'
        }, {
            image: '640x480.png',
            link: '#',
            head: 'Mauris congue dui ',
            author: ' Author Name',
            date: 'July 23, 2017',
            content: 'Mauris congue dui et felis sollicitudin, ac imperdiet dui tristique. Etiam commodo metus augue. Duis in ligula dui.'
        }, {
            image: '640x480.png',
            link: '#',
            head: 'mauris  dapibus porttitor',
            author: ' Author Name',
            date: 'June 23, 2017',
            content: 'mauris non dapibus porttitor, quam lacus malesuada purus, a pretium purus sapien vel orci. Nulla facilisi. Nam elementum maximus nisl,'
        }, {
            image: '640x480.png',
            link: '#',
            head: 'rhoncus nunc fringilla dapibus',
            author: ' Author Name',
            date: 'May 22, 2017',
            content: 'Nulla vehicula rhoncus nunc fringilla dapibus. Nunc sodales ipsum sem, a pellentesque libero aliquam nec. Quisque et pulvinar mauris, id pretium nisl. '
        }, {
            image: '640x480.png',
            link: '#',
            head: 'Cras leo nunc, vulputate id nisl at',
            author: ' Author Name',
            date: 'Apr 27, 2017',
            content: 'Cras leo nunc, vulputate id nisl at, gravida ullamcorper tellus. Sed finibus sit amet metus ut commodo. Maecenas nec aliquet elit, at euismod nulla. Vestibulum '
        }, {
            image: '640x480.png',
            link: '#',
            head: 'justo ligula imperdiet elit',
            author: ' Author Name',
            date: 'Mar 26, 2017',
            content: 'justo ligula imperdiet elit, a pellentesque leo lorem vel purus. Suspendisse porta, neque nec lacinia sagittis, lectus elit volutpat tortor, ut efficitur nunc '
        }, {
            image: '640x480.png',
            link: '#',
            head: 'Proin condimentum dui ac',
            author: ' Author Name',
            date: 'Feb 20, 2017',
            content: 'Proin condimentum dui ac iaculis dictum. Sed pellentesque diam ut magna efficitur tempus. Maecenas tincidunt lacus quis mauris elementum, ac volutpat.'
        }]
    },
    computed: {
        computedList: function() {
            var vm = this;
            return this.newposts.filter(function(newpost) {
                return newpost.content.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1
            })
        }
    }

});