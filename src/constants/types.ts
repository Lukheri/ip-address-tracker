export interface IPAdress {
    ip:       string;
    location: Location;
    as:       AS;
    isp:      string;
}

export interface AS {
    asn:    number;
    name:   string;
    route:  string;
    domain: string;
    type:   string;
}

export interface Location {
    country:  string;
    region:   string;
    timezone: string;
}