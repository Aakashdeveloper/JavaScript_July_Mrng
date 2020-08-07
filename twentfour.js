class geo{
    constructor(lat,long){
        this.lat = 10;
        this.long=20
    }
}


class langauge1 extends geo{
    constructor(name,country,lat,long){
        super(lat,long)
        this.name = name;
        this.country = country
    }

    add(a,b){
        return a+b
    }
}