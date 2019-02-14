$(document).ready(function() {
  var category = window.location.pathname;
  parseQueryString();
  var label = location.queryString.ref || document.referrer || 'direct';

  // Google Analytics
  $('a, button').click(function(e) {
    if (this.id) {
      gtag('event', this.id, {
        'event_category' : category,
        'event_label' : label
      });
    }
  });

  // CTA and Modal
  $('.lead-trigger').click(function(e) {
    setTimeout(function() {
      $('#modal-lead').modal('show');
    }, 300);
  });
  $('#modal-lead').on('shown.bs.modal', function(e) {
    $('#input-highlight').focus();
  });

  // Modal Form
  $('#form-lead').submit(function(e) {
    var form = $(this)[0];
    form.classList.add('was-validated');
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
    gtag('event', 'form-lead', {
      'event_category' : category,
      'event_label' : label
    });
    // Google Ads conversion "youcaptcha-lead"
    gtag('event', 'conversion', {
      'send_to': 'AW-956876247/s5QXCNS6lZUBENeLo8gD'
    });
    setTimeout(function() {
      $('#modal-lead').modal('hide');
      $('#modal-confirm').modal('show');
    }, 500);
  });

  function parseQueryString() {
    location.queryString = {};
    location.search.substr(1).split("&").forEach(function(pair) {
      if (pair === "")
        return;
      var parts = pair.split("=");
      location.queryString[parts[0]] = parts[1] && decodeURIComponent(parts[1].replace(/\+/g, " "));
    });
  }
});
