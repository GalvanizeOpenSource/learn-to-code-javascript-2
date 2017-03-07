function goldOrPotion() {
    var response = document.getElementById("response").value;

    if (response === 'TAKE GOLD') {
      document.getElementById("gold").classList.toggle('hidden');
      document.getElementById("intro").classList.toggle('hidden');
    } else if (response == 'DRINK POTION') {
      document.getElementById("potion").classList.toggle('hidden');
      document.getElementById("intro").classList.add('hidden').toggle('hidden');
    } else { document.getElementById("error").innerHTML = "Sorry, I do not understand." }
}
