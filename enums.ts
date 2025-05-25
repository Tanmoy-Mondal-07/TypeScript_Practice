// const AISLE = 0
// const MIDDLE = 1
// const WINDOW = 2

enum SeatChoice { // if u add a const befoure enum the compile result becam shorter and redibale
    AISLE = 10, //now its 10 value default 0
    MIDDLE,   // 11 
    WINDOW = "hlo"
}

const hcSeat = SeatChoice.AISLE