const { YoutubeTranscript } = require("youtube-transcript");
const fs = require("fs-extra");


async function fetchTranscript(videoId, author, fileName) {

    try {

        const transcript = await YoutubeTranscript.fetchTranscript(videoId);


        const text = transcript
            .map(item => item.text)
            .join("\n");


        const content = `
# YouTube Transcript


## Author

${author}


## Video ID

${videoId}


## Transcript


${text}

`;


        const path = `research/youtube-transcripts/${author}/${fileName}.md`;


        await fs.ensureDir(
            `research/youtube-transcripts/${author}`
        );


        await fs.writeFile(
            path,
            content
        );


        console.log(
            "Transcript saved:",
            path
        );


    } catch(error){

        console.log(
            "Error:",
            error.message
        );

    }

}


// Example

fetchTranscript(
    "o_5oc-O1B8k",
    "rand-fishkin",
    "video-1"
);

