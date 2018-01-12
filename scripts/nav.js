jQuery(document).ready(function ($) {
    var Min = 1170;
    //primary navigation slide-in effect
    if ($(window).width() > Min) {
        var headerHeight = $('.stickyNavContainer').height();
        $(window).on('scroll', {
                previousTop: 0
            },
            function () {
                var currentTop = $(window).scrollTop();
                if (currentTop < this.previousTop) {
                    //if scrolling up...
                    if (currentTop > 150 && $('.stickyNavContainer').hasClass('is-fixed')) {
                        $('.stickyNavContainer').addClass('is-visible');
                    } else {
                        $('.stickyNavContainer').removeClass('is-visible is-fixed');
                    }
                } else if (currentTop > this.previousTop) {
                    //if scrolling down...
                    $('.stickyNavContainer').removeClass('is-visible');
                    if (currentTop > (headerHeight + 150) && !$('.stickyNavContainer').hasClass('is-fixed')) $('.stickyNavContainer').addClass('is-fixed');
                }
                this.previousTop = currentTop;
            });

    }
});
const scrollTo = (idOfSection) => {
    console.log(idOfSection)
    var element = $(`.${idOfSection}`)
    $('html,body').animate({scrollTop: element.offset().top})
    $('.stickyNavContainer').addClass('is-visible');

}
var aboutLinks = document.getElementsByClassName("animLink");
for (let i = 0; i < aboutLinks.length; i++) {
    aboutLinks[i].addEventListener("click", () => scrollTo(aboutLinks[i].id))
}
