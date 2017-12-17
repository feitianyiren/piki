function initMetronome(e, o) {
    for (i = 30; 240 >= i; i++)
        $("#metronome_bpm").append('<option value="' + i + '">' + i + "</option>");
    $("#metronome_time_signature").val(e), $("#metronome_bpm").val(o), $("#metronome_play").on("click", function() {
        Metronome.play($("#metronome_time_signature").val(), $("#metronome_bpm").val())
    }), $("#metronome_time_signature").on("input", function() {
        Metronome.time_signature = $("#metronome_time_signature").val(), Metronome.tick >= 0 && Metronome.startTick()
    }), $("#metronome_bpm").on("input", function() {
        Metronome.bpm = $("#metronome_bpm").val(), console.log(Metronome.bpm), Metronome.tick >= 0 && Metronome.startTick()
    }), Metronome.time_signature = e, Metronome.bpm = o, Metronome.onstart = function() {
        $("#metronome_play").html("停止")
    }, Metronome.onstop = function() {
        $("#metronome_play").html("开始"), $("#metronome_beat").html("")
    }, Metronome.onbeat = function(e) {
        $("#metronome_beat").html(e)
    }
}
var Metronome = {
    beat: -1,
    tick: -1,
    bpm: 60,
    time_signature: "4/4"
};
Metronome.bell = function() {
    MidiAudio && MidiAudio.context ? MidiAudio.tick(1, 880, .9) : "undefined" != typeof NativeAPI && NativeAPI.noteOn(0, "bell", 100, 0)
}, Metronome.click = function() {
    MidiAudio && MidiAudio.context ? MidiAudio.tick(1, 440, .7) : "undefined" != typeof NativeAPI && NativeAPI.noteOn(0, "click", 100, 0)
}, Metronome.play = function(e, o) {
    Metronome.time_signature = e, Metronome.bpm = o, Metronome.beat < 0 ? (Metronome.startTick(), setInterval(Metronome.update, 100)) : Metronome.tick < 0 ? Metronome.startTick() : Metronome.stopTick()
}, Metronome.startTick = function() {
    Metronome.tick = 0, Metronome.beat = 0, Metronome.onstart && Metronome.onstart()
}, Metronome.stopTick = function() {
    Metronome.tick = -1, Metronome.onstop && Metronome.onstop()
}, Metronome.matchNumber = function(e, o) {
    var t = (e + "").match(/^\d+/g);
    return t ? t[0] : o ? o : 0
}, Metronome.update = function() {
    if (!(Metronome.tick < 0)) {
        var e = Metronome.matchNumber(Metronome.bpm, -1),
            o = Metronome.matchNumber(Metronome.time_signature, -1);
        if (!(0 > e || 0 > o)) {
            var t = Math.round(600 / e);
            Metronome.tick++ % t || (Metronome.beat = Metronome.beat % o, Metronome.onbeat && Metronome.onbeat(Metronome.beat + 1), Metronome.beat++ ? Metronome.click() : Metronome.bell())
        }
    }
};


