class YoutubeVideo{

    //Properties
    private videoTitle : String;
    private videoOwner : String;
    private videoPublishedDate : String;
    private videoDescription : String;
    private views : Number;
    private videoLikes : Number;
    private videoDislikes : Number;
    private channelSubscribeNumber : Number;
    autoPlay : Boolean;
    annotations : Boolean;
    videoSpeed : number[];
    videoQuality : string[];
    private comments:any;


    //Contructor
    constructor(
    videoTitle:String,
    videoOwner:String,
    videoPublishedDate:String,
    videoDescription:String,
    views:Number,
    videoLikes:Number,
    videoDislikes : Number,
    channelSubscribeNumber : Number,
    autoPlay : Boolean,
    annotations : Boolean,
    videoSpeed : number[],
    videoQuality : string[],
    comments? : {
        commentAuthor:String,
        commentTime:String,
        comment:String,
        commentLike:number,
        commentDislike:number,
        commentReplies:any
    }[]
    


    ){
        this.videoTitle = videoTitle;
        this.videoOwner = videoOwner;
        this.videoPublishedDate = videoPublishedDate;
        this.videoDescription = videoDescription;
        this.views = views;
        this.videoLikes = videoLikes;
        this.videoDislikes = videoDislikes;
        this.channelSubscribeNumber = channelSubscribeNumber;
        this.autoPlay = autoPlay;
        this.annotations = annotations;
        this.videoSpeed = videoSpeed;
        this.videoQuality = videoQuality;

        this.comments = comments;

    }// constructor ends

    getComments = () =>{
        //let commentLength = this.comments;
        let len = this.comments.length;
        console.log('Comments Received in this video: '+len)
        for(let i=0;i<len;i++){
        console.log(this.comments[i].comment);
        // console.log('Comment Author is : '+this.comments.commentAuthor);
        // console.log('Comment likes are : '+this.comments.commentLike);
        }
    }

    autoPlayStatus = () =>{
        if(this.autoPlay){
            return 'Yes'
        }else{
            return 'No'
        }
    }

    
    //getter method
    getTotalViews = () =>{
        return this.views;
    }

    //getter method
    getVideoOwner = () =>{
        return this.videoOwner;
    }

    getRelatedVides = () =>{
        console.log("Display the related videos")
    }

    // setVideoComment = (commentAuthor,commentTime,comment,commentLike,commentDislike) =>{
    //     this.comments

    // }
}// class ends

let button2 =()=>{
let video = new YoutubeVideo(
    'KunalKamra - Standup Comedy Part 1(2018)',
    'Kunal Kamra',
    'Published on Jul 2, 2018',
    'Buddho ne mujhe bohot tang kiya, ab meri baari hai.',
    938901,
    60000,
    3800,
    293000,
    true,
    false,
    [0.25,0.5,0.75,1,1.25,1.5,2],
    ['1080p','720p','480p','360p','240p','144p'],
    [{commentAuthor:'Sneha',commentTime:'1 hour ago',comment:'I love the unabashed and just free spirited nature of this piece Kunal! Matlab the self trolling in the last sentence was just next level! You are genuinely having fun with this!',commentLike:10,commentDislike:2,commentReplies:'Haha'},
    {commentAuthor:'Rohit',commentTime:'2 hours ago',comment:'Chinese company paytm hai jiska last year board modi ji le k khade thai',commentLike:10,commentDislike:2,commentReplies:'Haha'},
    {commentAuthor:'Salman',commentTime:'1 day ago',comment:'Bhuddha - Modi bhak',commentLike:10,commentDislike:2,commentReplies:'Haha'},
    {commentAuthor:'Neeraj',commentTime:'5 days ago',comment:'MAST VIDEO H SIR...SO FUNNY',commentLike:10,commentDislike:2,commentReplies:'Haha'}
    ]
)

console.log('Total views of the video is : ' + video.getTotalViews());
console.log('The creator of the video is : ' + video.getVideoOwner());
console.log('The video is available in the following resolutions : ' + video.videoQuality);
console.log('Is AutoPlay allowed in the video ? ' + video.autoPlayStatus());


video.getComments();

}



