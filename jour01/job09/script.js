function tri(liste) {
    var liste2 = []
    let Z = liste.length
    for (let z = 0; z < Z; z++) {
        var x = liste[0]
        for (var a in liste) {
            if (liste[a]<=x) {
                var x = liste[a]
                var y = a
            }
        }
        liste2 += [x];
        liste.splice(y,1)
    }
    console.log(liste2)
}

tri([5,7,1,9,4])
