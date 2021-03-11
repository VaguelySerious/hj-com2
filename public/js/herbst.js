$(document).ready(function () {
  // Navigation
  $('#navbar-toggle').click(function () {
    $('#navbar-toggle').toggleClass('expanded')
    $('#nav').slideToggle('slow', function () {
      // Animation complete.
    })
  })
  // Mail
  $('a.herbstmail').each(function () {
    e = this.rel.replace('/', '@')
    this.href = 'mailto:' + e
    $(this).text(e)
  })
})

$(window).load(function () {
  $('#content').fadeIn(500)
})
