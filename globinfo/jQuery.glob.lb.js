(function($) {
    var cultures = $.cultures,
        invariant = cultures.invariant,
        standard = invariant.calendars.standard,
        culture = cultures["lb"] = $.extend(true, {}, invariant, {
        name: "lb",
        englishName: "Luxembourgish",
        nativeName: "Lëtzebuergesch",
        language: "lb",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                ',': " ",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': " ",
                '.': ",",
                symbol: "€"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                firstDay: 1,
                days: {
                    names: ["Sonndeg","Méindeg","Dënschdeg","Mëttwoch","Donneschdeg","Freideg","Samschdeg"],
                    namesAbbr: ["Son","Méi","Dën","Mët","Don","Fre","Sam"],
                    namesShort: ["So","Mé","Dë","Më","Do","Fr","Sa"]
                },
                months: {
                    names: ["Januar","Februar","Mäerz","Abrëll","Mee","Juni","Juli","August","September","Oktober","November","Dezember",""],
                    namesAbbr: ["Jan","Feb","Mäe","Abr","Mee","Jun","Jul","Aug","Sep","Okt","Nov","Dez",""]
                },
                AM: null,
                PM: null,
                eras: [{"name":"n. Chr","start":null,"offset":0}],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd d MMMM yyyy",
                    f: "dddd d MMMM yyyy HH:mm",
                    F: "dddd d MMMM yyyy HH:mm:ss",
                    M: "d MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["lb"]);
    culture.calendar = culture.calendars.standard;
})(jQuery);