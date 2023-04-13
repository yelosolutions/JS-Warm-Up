var returnFifthLetter = (name) => {
    if (name.lenth < 5) {
        return;
    } else {
        return "This is the fifth letter of your name " + "'" + name[4] + "'";
    }
}

returnFifthLetter("Jayvascript");