#!/usr/bin/node
const amdict = {};
// Attach a change event handler to the checkboxes.
$("input").change(function() {
    $("input").each(function() {
        if (klikcmdr.checked=True) {
            amdict.append($("klikcmdr").data);
        } else {
            amdict.pop($("klikcmdr").data);
	}
    });
});
