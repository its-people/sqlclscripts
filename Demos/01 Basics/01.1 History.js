script
    var MultiLineHistory = Java.type("oracle.dbtools.raptor.console.MultiLineHistory");
    print(MultiLineHistory.getInstance().size());
/
    script
    //var MultiLineHistory = Java.type("oracle.dbtools.raptor.console.MultiLineHistory");
    MultiLineHistory.getInstance().setMaxSize(50);
/
script
    print(MultiLineHistory.getInstance().size());
/

    script
    //var MultiLineHistory = Java.type("oracle.dbtools.raptor.console.MultiLineHistory");
    MultiLineHistory.getInstance().setMaxSize(100);
/

script
    print(MultiLineHistory.getInstance().size());
/

