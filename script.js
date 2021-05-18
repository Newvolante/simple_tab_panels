$(function() {
    $('ul').on('click', 'a', function(e) {
        e.preventDefault();

        let aLink = this.hash;
        let currentTab = $(aLink);

        $('ul').siblings('div.active').removeClass('active').addClass('hidden');
        currentTab.removeClass('hidden').addClass('active');

    })
})