/**************************************************************/
/* W - Load modal contents dynamically                  */
/**************************************************************/
jQuery(document).ready(function($){
	$('.modal-body').load('../history.txt');
});



/**************************************************************/
/* Prepares the cv to be dynamically expandable/collapsible   */
/**************************************************************/
function prepareList() {
    $('#expList').find('li:has(ul)')
    .click( function(event) {
        if (this == event.target) {
            $(this).toggleClass('expanded');
            $(this).children('ul').toggle('medium');
        }
        return false;
    })
    .addClass('collapsed')
    .children('ul').hide();

    //Create the button funtionality
    $('#expandList')
    .unbind('click')
    .click( function() {
        $('.collapsed').addClass('expanded');
        $('.collapsed').children().show('medium');
    })
    $('#collapseList')
    .unbind('click')
    .click( function() {
        $('.collapsed').removeClass('expanded');
        $('.collapsed').children().hide('medium');
    })

};

function prepareList2() {
    $('#expList2').find('li:has(ul)')
    .click( function(event) {
        if (this == event.target) {
            $(this).toggleClass('expanded2');
            $(this).children('ul').toggle('medium');
        }
        return false;
    })
    .addClass('collapsed2')
    .children('ul').hide();

    //Create the button funtionality
    $('#expandList2')
    .unbind('click')
    .click( function() {
        $('.collapsed2').addClass('expanded2');
        $('.collapsed2').children().show('medium');
    })
    $('#collapseList2')
    .unbind('click')
    .click( function() {
        $('.collapsed2').removeClass('expanded2');
        $('.collapsed2').children().hide('medium');
    })

};
function prepareList3() {
    $('#expList3').find('li:has(ul)')
    .click( function(event) {
        if (this == event.target) {
            $(this).toggleClass('expanded3');
            $(this).children('ul').toggle('medium');
        }
        return false;
    })
    .addClass('collapsed3')
    .children('ul').hide();

    //Create the button funtionality
    $('#expandList3')
    .unbind('click')
    .click( function() {
        $('.collapsed3').addClass('expanded3');
        $('.collapsed3').children().show('medium');
    })
    $('#collapseList3')
    .unbind('click')
    .click( function() {
        $('.collapsed3').removeClass('expanded3');
        $('.collapsed3').children().hide('medium');
    })

};
function prepareList4() {
    $('#expList4').find('li:has(ul)')
    .click( function(event) {
        if (this == event.target) {
            $(this).toggleClass('expanded4');
            $(this).children('ul').toggle('medium');
        }
        return false;
    })
    .addClass('collapsed4')
    .children('ul').hide();

    //Create the button funtionality
    $('#expandList4')
    .unbind('click')
    .click( function() {
        $('.collapsed4').addClass('expanded4');
        $('.collapsed4').children().show('medium');
    })
    $('#collapseList4')
    .unbind('click')
    .click( function() {
        $('.collapsed4').removeClass('expanded4');
        $('.collapsed4').children().hide('medium');
    })

};
function prepareList5() {
    $('#expList5').find('li:has(ul)')
    .click( function(event) {
        if (this == event.target) {
            $(this).toggleClass('expanded5');
            $(this).children('ul').toggle('medium');
        }
        return false;
    })
    .addClass('collapsed5')
    .children('ul').hide();

    //Create the button funtionality
    $('#expandList5')
    .unbind('click')
    .click( function() {
        $('.collapsed5').addClass('expanded5');
        $('.collapsed5').children().show('medium');
    })
    $('#collapseList5')
    .unbind('click')
    .click( function() {
        $('.collapsed5').removeClass('expanded5');
        $('.collapsed5').children().hide('medium');
    })

};
/**************************************************************/
/* Functions to execute on loading the document               */
/**************************************************************/
$(document).ready( function() {
    prepareList()
    prepareList2()
    prepareList3()
    prepareList4()
    prepareList5()

});