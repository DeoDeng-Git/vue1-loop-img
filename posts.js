var pageBar = new Vue({
    el: '#vuetable',
    data: {
        //all 12 posts
        newposts: [ {
                image: 'http://jquery-plugins.net/image/plugin/getlorem-library-to-generate-lorem-ipsum-text.png',
                link: 'http://www.lipsum.com/',
                head: 'How sit amet, consectetur',
                author: ' Author Name',
                date: 'Sep 20, 2017',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit ligula velit, vel mollis leo congue eget. '
            },{
                image: 'https://pbs.twimg.com/profile_images/583353499808829441/PYs1EDZv.png',
                link: 'http://www.lipsum.com/',
                head: 'Can varius finibus',
                author: ' Author Name',
                date: 'Sep 20, 2017',
                content: ' Maecenas varius finibus mi, vitae sodales purus aliquam ut. Proin ut hendrerit mauris. Nullam arcu diam, tincidunt non rutrum sed, tincidunt varius metus. '
            },{
                image: 'http://random-ize.com/lorem-ipsum-generators/lorem-ipsum/lorem-ipsum.jpg',
                link: 'http://www.lipsum.com/',
                head: 'What elit quam, pretium ',
                author: ' Author Name',
                date: 'Sep 19, 2017',
                content: 'Integer elit quam, pretium a felis quis, mattis accumsan quam. Vivamus luctus turpis eros, id sodales tellus feugiat vel.'
            }, {
                image: 'https://f4.bcbits.com/img/0002206235_10.jpg',
                link: 'http://www.lipsum.com/',
                head: 'WhVestibulum at quam malesuadas er?',
                author: ' Author Name',
                date: 'Sep 19, 2017',
                content: 'Quisque egestas gravida metus. Ut velit enim, porta at iaculis nec, pulvinar in mi. Sed tincidunt euismod sagittis. Vestibulum ut cursus turpis. '
            },{
                image: 'https://target.scene7.com/is/image/Target/18784764?wid=520&hei=520&fmt=pjpeg',
                link: 'http://www.lipsum.com/',
                head: 'DVestibulum at quam malesuada disk',
                author: ' Author Name',
                date: 'May 5, 2017',
                content: 'Ut euismod congue ultricies. Nullam vel lacus vitae dui tristique sagittis. Nulla finibus tellus ornare gravida congue. Donec non porttitor augue. Suspendisse ullamcorper'
            },{
                image: 'https://krebsonsecurity.com/wp-content/uploads/2014/08/loremipsum.png',
                link: 'http://www.lipsum.com/',
                head: 'Vestibulum at quam malesuada',
                author: ' Author Name',
                date: 'May 5, 2017',
                content: 'Vestibulum at quam malesuada massa imperdiet dictum. Nam eu magna purus. Nunc aliquet nunc id dui varius, at iaculis elit auctor.'
            },{
                image: 'http://jquery-plugins.net/image/plugin/getlorem-library-to-generate-lorem-ipsum-text.png',
                link: 'http://www.lipsum.com/',
                head: 'Mauris congue dui et',
                author: ' Author Name',
                date: 'May 23, 2017',
                content: 'Mauris congue dui et felis sollicitudin, ac imperdiet dui tristique. Etiam commodo metus augue. Duis in ligula dui.'
            },{
                image: 'http://jquery-plugins.net/image/plugin/getlorem-library-to-generate-lorem-ipsum-text.png',
                link: 'http://www.lipsum.com/',
                head: 'mauris non dapibus porttitor',
                author: ' Author Name',
                date: 'May 23, 2017',
                content: 'mauris non dapibus porttitor, quam lacus malesuada purus, a pretium purus sapien vel orci. Nulla facilisi. Nam elementum maximus nisl,'
            },{
                image: 'http://jquery-plugins.net/image/plugin/getlorem-library-to-generate-lorem-ipsum-text.png',
                link: 'http://www.lipsum.com/',
                head: 'rhoncus nunc fringilla dapibus',
                author: ' Author Name',
                date: 'May 22, 2017',
                content: 'Nulla vehicula rhoncus nunc fringilla dapibus. Nunc sodales ipsum sem, a pellentesque libero aliquam nec. Quisque et pulvinar mauris, id pretium nisl. Nam quam erat, euismod a rutrum vitae, pretium eu justo.'
            },{
                image: 'http://jquery-plugins.net/image/plugin/getlorem-library-to-generate-lorem-ipsum-text.png',
                link: 'http://www.lipsum.com/',
                head: 'Cras leo nunc, vulputate id nisl at',
                author: ' Author Name',
                date: 'Apr 27, 2017',
                content: 'Cras leo nunc, vulputate id nisl at, gravida ullamcorper tellus. Sed finibus sit amet metus ut commodo. Maecenas nec aliquet elit, at euismod nulla. Vestibulum eu lectus volutpat, tempor sapien vitae, ullamcorper justo. Nam condimentum, dolor a suscipit consectetur,'
            },{
                image: 'http://jquery-plugins.net/image/plugin/getlorem-library-to-generate-lorem-ipsum-text.png',
                link: 'http://www.lipsum.com/',
                head: 'justo ligula imperdiet elit',
                author: ' Author Name',
                date: 'Apr 26, 2017',
                content: 'justo ligula imperdiet elit, a pellentesque leo lorem vel purus. Suspendisse porta, neque nec lacinia sagittis, lectus elit volutpat tortor, ut efficitur nunc quam non ligula. Praesent semper velit eu volutpat bibendum. '
            },{
                image: 'http://jquery-plugins.net/image/plugin/getlorem-library-to-generate-lorem-ipsum-text.png',
                link: 'http://www.lipsum.com/',
                head: 'Maecenas at tellus hendrerit',
                author: ' Author Name',
                date: 'Apr 26, 2017',
                content: 'Maecenas at tellus hendrerit, tempus libero vel, eleifend elit. Morbi imperdiet lectus sed consectetur consectetur. Sed placerat neque a odio faucibus, id vulputate sem fermentum. Morbi nec purus facilisis, auctor diam ut, iaculis quam. Morbi sodales sollicitudin metus eget porta.'
            },{
                image: 'http://jquery-plugins.net/image/plugin/getlorem-library-to-generate-lorem-ipsum-text.png',
                link: 'http://www.lipsum.com/',
                head: 'Proin condimentum dui ac',
                author: ' Author Name',
                date: 'Apr 20, 2017',
                content: 'Proin condimentum dui ac iaculis dictum. Sed pellentesque diam ut magna efficitur tempus. Maecenas tincidunt lacus quis mauris elementum, ac volutpat arcu tincidunt. Ut sed sem aliquet, iaculis lorem quis, accumsan risus. Pellentesque'
            }
        ]
    }

});