var FbAbout = /** @class */ (function () {
    function FbAbout(work, basicInfo, college, highschool, location, familyMembers, relationship) {
        var _this = this;
        this.contactAndBasicInfo = function () {
            console.log('Contact and BasicInfo Page');
            if (_this.mobilePhn != undefined) {
                console.log('Mobile Phones ' + _this.mobilePhn);
            }
            if (_this.email != undefined) {
                console.log('Email ' + _this.email);
            }
            console.log('BirthDate ' + _this.birthDate);
            console.log('BirthYear ' + _this.birthYear);
            console.log('Gender ' + _this.gender);
            console.log('Interested In ' + _this.interestedIn);
            console.log('languages ' + _this.languages);
            console.log('Religious Views ' + _this.religiousViews);
            console.log('Political Views ' + _this.politicalViews);
            console.log('\n');
        };
        this.workAndEducation = function () {
            var worklength = _this.work.length;
            for (var i = 0; i < worklength; i++) {
                console.log(_this.work[i].company);
                if (_this.work[i].designation != undefined) {
                    console.log(_this.work[i].designation + ' ' + _this.work[i].durationFrom + ' to ' + _this.work[i].durationTo + ' ' + _this.work[i].location);
                }
            }
            console.log('\n');
            var collegeLength = _this.college.length;
            for (var i = 0; i < collegeLength; i++) {
                console.log(_this.college[i].collegeName);
                console.log(_this.college[i].durationFrom + ' to ' + _this.college[i].durationTo + ' ' + _this.college[i].department + ' ' + _this.college[i].location);
            }
            var schoolLength = _this.highschool.length;
            for (var i = 0; i < schoolLength; i++) {
                console.log(_this.highschool[i].schoolName);
                console.log(_this.highschool[i].location);
            }
        };
        this.detailsAboutYou = function () {
            if (_this.aboutMe == undefined) {
                console.log(_this.aboutMe);
            }
            if (_this.othernames == undefined) {
                console.log(_this.othernames);
            }
            if (_this.favQuotes == undefined) {
                console.log(_this.favQuotes);
            }
            if (_this.bloodDonor == undefined) {
                console.log(_this.bloodDonor);
            }
        };
        this.work = work;
        this.mobilePhn = basicInfo.mobilePhn;
        this.birthDate = basicInfo.birthDate;
        this.birthYear = basicInfo.birthYear;
        this.email = basicInfo.email;
        this.gender = basicInfo.gender;
        this.religiousViews = basicInfo.religiousViews;
        this.interestedIn = basicInfo.interestedIn;
        this.languages = basicInfo.languages;
        this.politicalViews = basicInfo.politicalViews;
        this.college = college;
        this.highschool = highschool;
        this.currentCity = location.currentCity;
        this.homeTown = location.homeTown;
        this.otherPlaces = location.otherPlaces;
        this.relationship = relationship;
        this.familyMembers = familyMembers;
    }
    FbAbout.prototype.overviewfn = function () {
        //display the work related information
        var worklength = this.work.length;
        var top = worklength - 1;
        console.log(this.work[top].designation + ' at ' + this.work[top].company);
        for (var i = 0; i < top; i++) {
            console.log('Past:' + this.work[i].company);
        }
        console.log('\n');
        //display phone no. and birthday if available
        if (this.mobilePhn != '') {
            console.log('Mobile: ' + this.mobilePhn);
        }
        if (this.birthDate != '') {
            if (this.birthYear != '') {
                console.log(this.birthDate + ',' + this.birthYear);
            }
            else {
                console.log(this.birthDate);
            }
        }
        console.log('\n');
        //display education details
        //console.log(this.college[0].collegeName);
        if (this.college != '') {
            for (var i = 0; i < (this.college.length); i++) {
                console.log('Studied ' + this.college[i].department + ' at ' + this.college[i].collegeName);
            }
        }
        for (var i = 0; i < (this.highschool.length); i++) {
            console.log('Past:' + this.highschool[i].schoolName);
        }
        console.log('\n');
        //display location details
        if (this.currentCity != '') {
            console.log('Lives in ' + this.currentCity);
        }
        if (this.homeTown != '') {
            console.log('From ' + this.homeTown);
        }
        if (this.otherPlaces.length != 0) {
            console.log('Lived ' + this.otherPlaces);
        }
        console.log('\n');
        //display family Members
        console.log(this.familyMembers.length + ' Members');
        for (var i = 0; i < (this.familyMembers.length); i++) {
            console.log(this.familyMembers[i].name);
        }
    };
    FbAbout.prototype.placesLived = function () {
        console.log(this.currentCity);
        console.log(this.homeTown);
        for (var i = 0; i < (this.otherPlaces.length); i++) {
            console.log(this.otherPlaces[i]);
        }
    };
    FbAbout.prototype.familyAndRelationsips = function () {
        console.log('Relationship: ' + this.relationship);
        console.log('\n');
        console.log('Family Members');
        for (var i = 0; i < (this.familyMembers.length); i++) {
            console.log(this.familyMembers[i].name);
            console.log(this.familyMembers[i].relation);
            console.log('\n');
        }
    };
    FbAbout.prototype.getAge = function () {
        var dt = new Date();
        var currentYr = dt.getFullYear();
        return (+(currentYr) - +(this.birthYear));
    };
    return FbAbout;
}());
var button = function () {
    var fbAbout = new FbAbout([{ company: 'Student' },
        { company: 'Igate Global Solutions', designation: 'Software Engineer', durationFrom: 'October 2015', durationTo: 'January 2016', location: 'Pune,Maharashtra' },
        { company: 'Capgemini India', designation: 'Associate Consultant', durationFrom: 'February 2016', durationTo: 'Present', location: 'Bangalore,Karnataka' }
    ], {
        mobilePhn: '9051622440',
        birthDate: '12th December',
        birthYear: '1992',
        gender: 'Male',
        interestedIn: 'Women',
        languages: ['English', 'Bengali', 'Hindi'],
        religiousViews: 'Hinduism',
        politicalViews: 'Non Political'
    }, [{ collegeName: 'JIS College of Engineering', durationFrom: '2011', durationTo: '2015', department: 'CSE', location: 'Kalyani', graduated: true }], [{ schoolName: 'Modern School', location: 'Barrackpore', graduated: true },
        { schoolName: 'Modern English Academy', location: 'Barrackpore', graduated: true }
    ], { currentCity: 'Bangalore', homeTown: 'Barrackpore,Kolkata', otherPlaces: ['Pune'] }, [{ name: 'Abhik Bose', relation: 'Brother' },
        { name: 'Aromita Bose', relation: 'Sister' },
        { name: 'Tandra Bose', relation: 'Mother' }
    ], 'single');
    console.log('Current Age of the user is : ' + fbAbout.getAge());
    console.log('Overview function');
    fbAbout.overviewfn();
    console.log('Contact and Basic Info');
    fbAbout.contactAndBasicInfo();
    console.log('Work and Education');
    fbAbout.workAndEducation();
    console.log('Places you have lived');
    fbAbout.placesLived();
    console.log('Family and Relationships');
    fbAbout.familyAndRelationsips();
};
