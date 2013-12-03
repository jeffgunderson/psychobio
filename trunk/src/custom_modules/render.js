/*
 *
 * Render the homepage
 *
 */
exports.renderHomepage = function( res, data ) {

    console.log( 'Starting to render the homepage');
    console.log( data );

    res.render('homepage',
        {
            // TODO: will be 'data: data' once service request is plumbed in
            data: {
                title: 'This is a title',
                description: 'This is the page description'
            },
            partials: {
                'header': 'common/header',
                'footer': 'common/footer',
                'tracking':'common/tracking'
            }
        }
    );

};

