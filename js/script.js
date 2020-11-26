$(function () {
  // filter
  let filter = $("[data-filter]");

  filter.on("click", function (evt) {
    evt.preventDefault();
    let cat = $(this).data('filter');

    if (cat == 'all') {

      $("[data-cat]").removeClass('hidden');
    } else {
      $("[data-cat]").each(function () {
        let workCat = $(this).data('cat');

        if (workCat != cat) {
          $(this).addClass('hidden');
        } else {
          $(this).removeClass('hidden');
        }
      });
    }
  });

  // Modals

  const modalCall = $("[data-modal]");
  const modalClose = $("[data-close]");


  modalCall.on("click", function (evt) {
    evt.preventDefault();
    let $this = $(this);
    let modalId = $this.data('modal');
    $('body').addClass('no-scroll');

    $(modalId).addClass('show');
  });

  modalClose.on("click", function (evt) {
    evt.preventDefault();
    let $this = $(this);
    let modalParent = $this.parents('.modal');

    modalParent.removeClass('show');

    $('body').removeClass('no-scroll');
  });

  $('.modal').on("click", function () {
    $(this).removeClass('show');

    $('body').removeClass('no-scroll');
  });

  $('.modal__dialog').on("click", function (evt) {
    evt.stopPropagation();
  });
});