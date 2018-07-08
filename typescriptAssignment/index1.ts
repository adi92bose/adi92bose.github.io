class FbAbout{
    protected work: any;
    protected mobilePhn : string;
    protected birthDate:string;
    protected birthYear:string;
    protected college:any;
    protected highschool:any;
    protected currentCity:string;
    protected homeTown:string;
    protected otherPlaces:string[];
    protected familyMembers:any;
    protected professionalSkills:any;
    protected gender:string;
    protected interestedIn:string;
    protected email:string;
    protected languages:string[];
    protected religiousViews:string;
    protected politicalViews:string;
    protected relationship:string;
    protected aboutMe:string;
    protected othernames: string[];
    protected favQuotes: string[];
    protected bloodDonor : boolean;
    protected liveEvents: any;

    constructor(
        work?:{
            company:string,
            designation?:string,
            durationFrom?:string,
            durationTo?:string,
            location?:string
        }[],

        basicInfo?:{
        mobilePhn?:string,
        birthDate?:string,
        birthYear?:string,
        email?:string,
        gender?:string,
        interestedIn?:string,
        languages?:string[],
        religiousViews?:string,
        politicalViews?:string
        },
        college?:{
            collegeName:string,
            durationFrom:string,
            durationTo:string,
            department:string,
            location:string,
            graduated:boolean
        }[],
        highschool?:{
            schoolName:string,
            location:string,
            graduated:boolean,
            durationFrom?:string,
            durationTo?:string,
            
        }[],
        location?:{
        currentCity:string,
        homeTown:string,
        otherPlaces?:string[],
        },
        familyMembers?:{
            name:string,
            relation:string
        }[],
        relationship?:string
    ){

        this.work=work;
        this.mobilePhn = basicInfo.mobilePhn;
        this.birthDate = basicInfo.birthDate;
        this.birthYear = basicInfo.birthYear;
        this.email = basicInfo.email;
        this.gender = basicInfo.gender;
        this.religiousViews=basicInfo.religiousViews;
        this.interestedIn=basicInfo.interestedIn;
        this.languages=basicInfo.languages;
        this.politicalViews=basicInfo.politicalViews;
        this.college = college;
        this.highschool = highschool;
        this.currentCity = location.currentCity;
        this.homeTown = location.homeTown;
        this.otherPlaces = location.otherPlaces;
        this.relationship = relationship;
        this.familyMembers = familyMembers;

    }

    overviewfn(){
        //display the work related information
        let worklength = this.work.length;
        let top = worklength - 1;
        console.log(this.work[top].designation+' at '+this.work[top].company);
        for(let i =0;i<top;i++){
            console.log('Past:'+this.work[i].company)
        }
        console.log('\n');
        //display phone no. and birthday if available
        if(this.mobilePhn!=''){
            console.log('Mobile: '+this.mobilePhn)
        }
        if(this.birthDate!=''){
            if(this.birthYear!=''){
                console.log(this.birthDate+','+this.birthYear)
            }else{
                console.log(this.birthDate)
            }
        }
        console.log('\n');

        //display education details
        //console.log(this.college[0].collegeName);
        if(this.college!=''){
            for(let i=0;i<(this.college.length);i++){
            console.log('Studied '+this.college[i].department+' at '+this.college[i].collegeName)
            }
        }
        for(let i=0;i<(this.highschool.length);i++){
            console.log('Past:'+this.highschool[i].schoolName)
        }
        console.log('\n');

        //display location details
        if(this.currentCity!=''){
            console.log('Lives in '+this.currentCity)
        }
        if(this.homeTown!=''){
            console.log('From '+this.homeTown)
        }
        if(this.otherPlaces.length!=0){
            console.log('Lived '+this.otherPlaces)
        }
        console.log('\n');

        //display family Members
        console.log(this.familyMembers.length+' Members')
        for(let i=0;i<(this.familyMembers.length);i++){
            console.log(this.familyMembers[i].name)
        }
        

    }
    contactAndBasicInfo = ()=>{
        console.log('Contact and BasicInfo Page');
        if(this.mobilePhn!=undefined){
        console.log('Mobile Phones '+this.mobilePhn)
        }
        if(this.email!=undefined){
        console.log('Email '+this.email)   
        }
        console.log('BirthDate '+this.birthDate)
        console.log('BirthYear '+this.birthYear)
        console.log('Gender '+this.gender)
        console.log('Interested In '+this.interestedIn)
        console.log('languages '+this.languages)
        console.log('Religious Views '+this.religiousViews)
        console.log('Political Views '+this.politicalViews)
        console.log('\n')

    }

    workAndEducation = ()=>{
        let worklength = this.work.length;
        for(let i =0;i<worklength;i++){
            console.log(this.work[i].company)
            if(this.work[i].designation!=undefined){
                console.log(this.work[i].designation+' '+this.work[i].durationFrom+' to '+this.work[i].durationTo+' '+this.work[i].location)
            }
        }
        console.log('\n');

        let collegeLength = this.college.length;
        for(let i=0;i<collegeLength;i++){
            console.log(this.college[i].collegeName)
            console.log(this.college[i].durationFrom+' to '+this.college[i].durationTo+' '+this.college[i].department+' '+this.college[i].location)
        }

        let schoolLength = this.highschool.length;
        for(let i=0;i<schoolLength;i++){
            console.log(this.highschool[i].schoolName)
            console.log(this.highschool[i].location)
    }
}

    placesLived(){
        console.log(this.currentCity)
        console.log(this.homeTown)
        for(let i=0;i<(this.otherPlaces.length);i++){
            console.log(this.otherPlaces[i])
        }
    }

    familyAndRelationsips(){
        console.log('Relationship: '+this.relationship)
        console.log('\n')
        console.log('Family Members')
        for(let i=0;i<(this.familyMembers.length);i++){
            console.log(this.familyMembers[i].name)
            console.log(this.familyMembers[i].relation)
            console.log('\n')

        }

    }

    detailsAboutYou = ()=>{
        if(this.aboutMe==undefined){
            console.log(this.aboutMe)
        }
        if(this.othernames==undefined){
            console.log(this.othernames)
        }
        if(this.favQuotes==undefined){
            console.log(this.favQuotes)
        }
        if(this.bloodDonor==undefined){
            console.log(this.bloodDonor)
        }
    }

    getAge(){
        let dt = new Date();
        let currentYr = dt.getFullYear();
        return (+(currentYr) - +(this.birthYear))
    }




}


let button = () =>{
let fbAbout = new FbAbout(
[{company:'Student'},
{company:'Igate Global Solutions',designation:'Software Engineer',durationFrom:'October 2015',durationTo:'January 2016',location:'Pune,Maharashtra'},
{company:'Capgemini India',designation:'Associate Consultant',durationFrom:'February 2016',durationTo:'Present',location:'Bangalore,Karnataka'}
],
{
        mobilePhn:'9051622440',
        birthDate:'12th December',
        birthYear:'1992',
        gender:'Male',
        interestedIn:'Women',
        languages:['English','Bengali','Hindi'],
        religiousViews:'Hinduism',
        politicalViews:'Non Political'
},
[{collegeName:'JIS College of Engineering',durationFrom:'2011',durationTo:'2015',department:'CSE',location:'Kalyani',graduated:true}],
[{schoolName:'Modern School',location:'Barrackpore',graduated:true},
{schoolName:'Modern English Academy',location:'Barrackpore',graduated:true}
],
{currentCity:'Bangalore',homeTown:'Barrackpore,Kolkata',otherPlaces:['Pune']},
[{name:'Abhik Bose',relation:'Brother'},
{name:'Aromita Bose',relation:'Sister'},
{name:'Tandra Bose',relation:'Mother'}
],
'single'
);

console.log('Current Age of the user is : '+fbAbout.getAge())
console.log('Overview function')
fbAbout.overviewfn();
console.log('Contact and Basic Info')
fbAbout.contactAndBasicInfo();
console.log('Work and Education')
fbAbout.workAndEducation();
console.log('Places you have lived')
fbAbout.placesLived();
console.log('Family and Relationships')
fbAbout.familyAndRelationsips();

}


