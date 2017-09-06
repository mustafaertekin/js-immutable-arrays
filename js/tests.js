/**
 * The following questions are to be answered by the provided data structure "Passengers" in the file "js/passengers.js".
 *
 * Please open the file "js/chapters/chapter-xx.js"
 *
 */

describe('Chapter 02 - Get more statistical information', () => {

    it('01) How many passengers have at least one child?', () => {
        let result = findNumberOfPassengersByMinChildren(Passengers, 1); 
        result.should.be.equal(14);
    });
    
    it('02) How many woman passengers have at least two children?', () => {
        let result = findNumberPassengersByMinChildrenAndGender(Passengers, 2, "F"); 
        result.should.be.equal(4);
    });
    
    it('03) How many passengers are coming from Turkey?', () => {
        let result = findNumberOfPassengersByCountry(Passengers, "Turkey"); 
        result.should.be.equal(2);
    });   
    
    it('04) How many passengers are coming from Switzerland with no children?', () => {
        let result = findNumberOfPassengersByChildrenAndCountry(Passengers, 0, "Swiss"); 
        result.should.be.equal(6);
    });  
    
    it('05) How many women do know the language "EN" english?', () => {
        let result = findNumberOfPassengersByLanguageAndGender(Passengers, "EN", "F"); 
        result.should.be.equal(4);
    });  
    
    it('06) How many men do know the language "EN" and are coming from Turkey?', () => {
        let result = findNumberOfPassengersByLanguageAndGenderAndCountry(Passengers, "EN", "M", "Turkey"); 
        result.should.be.equal(1);
    }); 
    
    it('07) How many passengers are earning at least 61000.- and do know "EN" and has no children?', () => {
        let result = findNumberOfPassengersByLanguageAndSalaryAndNumberOfChildren(Passengers, "EN", 61000, 0); 
        result.should.be.equal(4);
    });  
    
    it('08) Is there any person in the train earning less than 50000.- and living in Swiss?', () => {
        let result = isThereAnyPersonBySalaryAndCountry(Passengers, 50000, "Swiss"); 
        result.should.be.equal(true);
    }); 
    
    it('09) How many passengers have been in Swiss since 4 months?', () => {
        let result = findNumberOfPassengersByEntryDate(Passengers, new Date(2017, 3, 1)); 
        result.should.be.equal(4);
    }); 
    
    it('10) Find the name of passengers originating in Adana?', () => {
        let result = findNamesOfPassengersByOrigin(Passengers, "Adana"); 
        result.should.be.deepEqual(["Halime", "Mesut"]);
    });

    it('11) Find the name of passengers who has horoscope "LEO"?', () => {
        let result = findNamesOfPassengersByHoroscope(Passengers, "LEO"); 
        result.should.be.deepEqual(["Mehmet", "Zafer", "Michel"]);
    });
    
    it('12) How many passengers do know the languages "EN" and "DE" but not "TR"', () => {
        let result = findNamesOfPassengersByAcceptedAndNotAcceptedLanguages(Passengers, ["DE", "EN"], ["TR"]); 
        result.should.be.equal(6);
    });
       
});




describe('Chapter 01 - Get general information about the train', () => {

    it('01) Howmany passengers are in the train?', () => {
        let result = findNumberOfPassengers(Passengers); 
        result.should.be.equal(21);
    });
    
    it('02) What is the first name of third person in the group?', () => {
        let result = findPersonByIndex(Passengers, 3); 
        result.should.be.equal("Sevda");
    });
    
    it('03) What is the last name of person with ticket-id 191?', () => {
        let result = findPersonByTicketId(Passengers, 191); 
        result.should.be.equal("K.");
    });
    
    it('04) How many women are in the passengers?', () => {
        let result = findNumberOfWomen(Passengers); 
        result.should.be.equal(8);
    });
    
    it('05) How many men are in the passengers?', () => {
        let result = findNumberOfMen(Passengers); 
        result.should.be.equal(13);
    });
    
    it('06) How many passengers are not adult?', () => {
        let result = findUnderagePassengers(Passengers); 
        result.should.be.equal(4);
    });
    
    it('07) How many passengers have no children?', () => {
        let result = findPassengersWithNoChildren(Passengers); 
        result.should.be.equal(7);
    });
});