const IP_ADDRESS = "10.208.0.223";
// expected_result = 181403871

function convertIntegerToIPv4(integer_ip) {
    function paddingBinaryInteger(binary) {
        if (binary.length < 32) {
            let leadingZeros = 32 - binary.length
            for (let i=0;i < leadingZeros; i++) {
                binary = "0" + binary;
            } 
        }
        return binary
    }

    let binaryIP = paddingBinaryInteger(integer_ip.toString(2));
    let octects = binaryIP.match(/.{1,8}/g);
    let ip_address_array = [];
    for(let i in octects) {
        ip_address_array.push(parseInt(octects[i], 2));
    }
    return ip_address_array.join(".");
}

function convertIPv4ToInteger(ipv4_string) {
    function paddingBinaryOctect(binary) {
        if (binary.length < 8) {
            let leadingZeros = 8 - binary.length
            for (let i=0;i < leadingZeros; i++) {
                binary = "0" + binary;
            } 
        }
        return binary
    }

    const octects = ipv4_string.split(".");
    let completeBinary = ""
    for(let i in octects) {
        completeBinary += paddingBinaryOctect(parseInt(octects[i]).toString(2))
    }

    let ipv4_integer = parseInt(completeBinary, 2);
    return ipv4_integer;
}

function convertIntegerIPtoHex(integerIP) {
    function paddingHexString(hex) {
        if (hex.length < 8) {
            let leadingZeros = 8 - hex.length
            for (let i=0;i < leadingZeros; i++) {
                hex = "0" + hex;
            } 
        }
        return hex
    }
    return paddingHexString(integerIP.toString(16));
}

let integerIP = convertIPv4ToInteger(IP_ADDRESS);

let ipAddress = convertIntegerToIPv4(integerIP);

let hexIp = convertIntegerIPtoHex(integerIP);

console.log("%s - %s - %s", integerIP, ipAddress, hexIp);