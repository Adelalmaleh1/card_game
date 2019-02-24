const data = [{
    realName: 'Brianna Forbes',
    playerName: 'Dreamlurk The Unstoppable',
    asset: 'Foghammer Lead'
},
{
    realName: 'Darcy Candice Ball',
    playerName: 'Crystaldash',
    asset: 'Secret Glowquake Gold'
},
{
    realName: 'Hillary Gibbs',
    playerName: 'Speedsoul',
    asset: 'Shifting Rainshadow Iron'
},
{
    realName: 'Elva Becky Hammond',
    playerName: 'Seekvenom The Mystic',
    asset: "Valkyries' Opal Adamant"
},
{
    realName: 'Enid Rose',
    playerName: 'Coincurse The Ghoul',
    asset: 'Jewelevil Bronze Of Goddesses'
},
{
    realName: 'Esmeralda Carrillo',
    playerName: 'Skulldart',
    asset: 'Yellow Orichalcum Of Paladins'
}
]

function loadCards() {
    let s = '';
    for (i in data) {
        s += '<div class="col-xs-12 col-md-4 col-md-3 clickableCard" id="clickableCard"  data-realName="'+ data[i].realName +'" data-playerName="'+data[i].playerName+'" data-asset="'+data[i].asset+'">';
        s+= '<div class="image-flip">';
        s+= '<div class="mainflip">';
        s+= '<div class="frontside">';
        s+= '<div class="card">';
        s+= '<div class="card-body text-left">';
        s+= '<p class="text-truncate">'+ data[i].realName + '</p>';
        s+= '<p class="text-truncate">'+ data[i].playerName + '</p>';
        s+= '<p class="text-truncate">'+ data[i].asset + '</p>';
        s+= '</div></div></div>';
        s+= '<div class="backside">';
        s+= '</div></div></div></div></div>';
    }
    $('#cards').html(s)
}

$(document).on('click', '.clickableCard', function(){
    const realName = $(this).data('realname')
    const playerName = $(this).data('playername')
    const asset = $(this).data('asset')

    /*
        Add active class when selected. and defauly color is black
    */

    $('.clickableCard').each(function(){
        $(this).attr('style', 'color:black');
        $(this).removeClass('active');
    })

    /*
        Change the card color when selected.
    */

    $(this).addClass('active');
    $(this).attr('style', 'color: #FF7600; font-weight: bold');

    /*
        Details desplay
    */
    let s = '';
    s += '<div class="card">';
    s += '<div class="card-body card-deatils">';
    s += '<h1 class="card-title">Details</h1>';
    s += '<ul>';
    s += '<li>Real Name: '+realName+'</li>';
    s += '<li>Player Name: '+playerName+'</li>';
    s += '<li>Asset: '+asset+'</li>';
    s += '</ul>';
    s += '</div></div>';
    $('#cardDetails').html(s);
})

/*
    Sort according to Real name ascending.
*/

$(document).on('click', '#sort_asc', function(){ 
    var cards = $('div#cards');
    var cont = cards.children('div');
    cont.detach().sort(function(a, b) {
        var astts = $(a).data('realname');
        var bstts = $(b).data('realname')
        return (astts > bstts) ? (astts > bstts) ? 1 : 0 : -1;
    });
    cards.append(cont);
});

/*
    Sort according to Real name descending
*/

$(document).on('click', '#sort_desc', function(){ 
    var cards = $('div#cards'); 
    var cont = cards.children('div');
    cont.detach().sort(function(b, a) {
        var astts = $(b).data('realName');
        var bstts = $(a).data('realName')
        return (astts > bstts) ? (astts > bstts) ? 1 : 0 : -1;
    });
    cards.append(cont);
});

/*
    Submit function with Ajax.

    Currently the Ajax does not work but this is the way of doing it.
*/

$(document).on('click', '#submit', function(){ 
    $('.clickableCard').each(function(){
        if ( $(this).hasClass("active") ) {
            const realName = $(this).data('realname')
            const playerName = $(this).data('playername')
            const asset = $(this).data('asset')
            $.post( "ajax/test", {'realName': realName, 'playerName': playerName, 'asset': asset}, function( err, data ) {
                alert('submited succsessfuly with Real Name: '+realName+', Player Name: '+ playerName+', Asset: '+asset)
                if(err){
                    alert('An error happened. Please try again later.')
                }
                alert('Submited successfully')
            });
        }
    })
});

/*
    this is another way for the Submit function but without using Ajax.
*/

/*
$(document).on('click', '#submit', function(){ 
    $('.clickableCard').each(function(){
        if ( $(this).hasClass("active") ) {
            const realName = $(this).data('realname')
            const playerName = $(this).data('playername')
            const asset = $(this).data('asset')
            alert('submited succsessfuly with Real Name: '+realName+', Player Name: '+playerName+', Asset: '+asset)
        }
    })
});
*/