script
    var MultiLineHistory = Java.type("oracle.dbtools.raptor.console.MultiLineHistory");
    print(MultiLineHistory.getInstance().size());
/

script
    // decrease limit
    MultiLineHistory.getInstance().setMaxSize(50);
/

script
    print(MultiLineHistory.getInstance().size());
/

script
    // increase limit
    MultiLineHistory.getInstance().setMaxSize(100);
/

script
    print(MultiLineHistory.getInstance().size());
/

