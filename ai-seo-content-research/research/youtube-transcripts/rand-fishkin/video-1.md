## Author
rand-fishkin

## Video Title
Near Memo: AI Visibility vs Google Ranking (2026 Predictions)

## Source
YouTube

## Video Link
https://www.youtube.com/watch?v=o_5oc-O1B8k

## Channel
Near Memo

## Topic
AI Brand Visibility Tracking, Zero-Click Search, and the Future of Measurement

## Why Selected
This video was selected because Rand Fishkin shares empirical research — conducted with 600 volunteers across three AI models — that tests whether brand presence in AI responses can be reliably tracked, directly relevant to how AI SEO visibility should be measured and acted on.

# Key Points From Rand Fishkin's Video

## 1. AI brand presence tracking is statistically valid, but rank tracking is not
Rand's research with 600 volunteers running identical prompts across ChatGPT, Claude, and Google AI found that while every response was worded differently, brand *presence* (the % of time a brand appears) was consistent enough to track meaningfully — but positional rank tracking was still meaningless.

### Research Insight
AI SEO measurement should focus on share-of-presence across prompts, not position. This gives a more honest and actionable signal than rank-based tools.

---

## 2. Local AI visibility mirrors early Google Maps dynamics
In the LA Volvo dealership example, only 8–9 of 11 dealerships ever appeared across all three AI models, with the top four appearing over 70% of the time and three being completely invisible — similar to early Google Maps visibility gaps.

### Research Insight
For local businesses, AI visibility is already a real competitive differentiator, and the gap between visible and invisible brands is significant.

---

## 3. Enterprise AI visibility tools are unjustifiably expensive
Rand stated the statistical methodology his research used is replicable without expensive tools — Claude itself can build a reasonably functional tracker — and that paying $50,000/month for enterprise AI visibility platforms is hard to justify.

### Research Insight
The core tracking method (running a prompt N times, measuring brand appearance rate) is accessible to any business willing to invest methodology, not money.

---

## 4. Any single AI response is incomplete, not wrong
After conducting this research, Rand changed his own search behavior: he now asks the same query up to 10 times to get a complete picture of the brand landscape, because any one response surfaces only a subset of relevant brands.

### Research Insight
For researchers and marketers, a single AI query is not a reliable sample. Repeated prompting is necessary to understand the real competitive set an AI surfaces.

---

## 5. Discovery is being disintermediated; transactions are not
Rand argued that zero-click growth does not mean commerce is disappearing — it means the discovery, attention-earning, and consideration phases are moving off owned websites onto platforms. The final purchase still happens.

### Research Insight
SEO strategy needs to separate the discovery phase (now platform-dependent) from the conversion phase (still ownable), and plan for both differently.

---

## 6. "Don't build on rented land" is now dead wrong
Rand explicitly reversed his own 20-year-old advice, stating that brands *must* now build presence on platforms they don't own, because that is where audience attention lives.

### Research Insight
Platform presence — Reddit, YouTube, AI overviews, Instagram — is no longer optional for discovery. Owned-site-only strategies will lose visibility at the top of the funnel.

---

## 7. Measurement has reverted to brand-era thinking
Rand argued that the first 25 years of digital marketing operated under a false precision — everything tracked, attributed, and optimized. That era is ending. Modern measurement is now closer to how a 1965 highway billboard was measured: time-series lift, not click attribution.

### Research Insight
Marketers need to accept that AI-era attribution will be incomplete and invest in time-series measurement (before/after visibility changes) rather than last-click models.

---

## 8. Focus on the intersection of three things
For brand building and channel selection, Rand recommended focusing only on the intersection of: where your audience actually pays attention to your topic, what you are genuinely good at producing, and where you have a competitively unique advantage over competitors.

### Research Insight
Channel selection should be ruthlessly filtered — local businesses in particular should resist pressure to be everywhere and instead dominate one or two platforms that meet all three criteria.

---

# Pros Mentioned / Observed From The Video

## 1. Empirically grounded, not opinion-based
Rand's AI visibility findings come from a structured study with 600 volunteers, three AI models, and statistical validation — not anecdote or theory.

## 2. Intellectual honesty — corrects his own hypothesis
Rand openly states "Rand is wrong" when the data contradicted his starting assumption, which makes the conclusions more credible than those of experts who only confirm their priors.

## 3. Practical local business framing
The Volvo dealership example makes abstract AI visibility concepts immediately concrete and actionable for local business contexts.

---

# Cons / Challenges Mentioned / Observed From The Video

## 1. Panel format limits depth
Because this is a multi-speaker discussion, Rand's points are sometimes cut short or redirected before he fully develops them.

## 2. Research used only three models from late 2025
The study covered ChatGPT, Claude Opus, and Google AI Mode as of November–December 2025 — results may shift as models update rapidly.

## 3. No detailed methodology shared for platform mention tracking
The SparkToro TikTok example (half a million views driving a signup spike) was anecdotal, with no specific method explained for how to replicate that kind of unlinked mention tracking.

---

## Transcript


[music]
Hey everybody, welcome back to the near
memo with David Mim, Mike Blumenthal, me
Greg Sterling, and today our friend Ran
Fishkin is back for an encore
performance and we'll be talking about a
lot of interesting things tied into his
predictions for 2026 and adjacent
issues. Welcome, Ran. Thanks for being
on again. It's always great to have you
here.
>> Always great to
>> I would like to think of it as a second
act rather than an encore. That way we
can get them back again and we have an
encore.
>> All right. Okay. So, among the
predictions that you made earlier, I
don't know when it was precisely, but
not too long ago. You you talked about
five big marketing trends. I don't think
we want to talk about all of them
equally because we don't have enough
time, but I'll just repeat them for the
sake of the audience, and we'll link in
the show notes to the to the post. AI
usage is going to slow yet there'll be
continuing corporate pressure for
employees to adopt and for companies to
adopt. AI sentiment tracking is
inherently unreliable and people are
disproportionately investing in that and
under underinvesting in other areas.
There's a credibility
crisis happening to some degree online.
We're we're starting to see more and
more content written for algorithms and
less for humans. more and more AI
abstraction of content and summaries and
so on and so forth and then more
zeroclick um zero zeroclick experiences
becoming the majority of online
journeys. So that was not a great
summary of your your predictions, let's
just say. But um let's jump into the
issue of people investing in all these
AI visibility tools. you did some some
really pretty compelling research on
that issue on their reliability on their
ability to consistently show where
people were appearing or not appearing.
Why don't you elaborate on that and
let's get into that a bit.
>> Yeah. So basically I I had this theory a
starting theory which I I like to do
with research and experimentation which
was that tracking AI tools responses to
suggested products or services or brands
was entirely baloney and it's and that
it was entirely bologoney because the
randomness of the combination of three
things basically the results the sort of
statistical lottery of words that
frequently come after other words the
spicy autocomplete of how AI tools are
built and how how they respond would
randomize things to such a degree that
it would be difficult to track your
brand's presence. The second one is that
each time you ask an AI, it comes up
with a new answer, right? And so what
are the differences between API calls?
Do they do any caching? Uh are users in
different countries and different
regions getting different answers? What
about personalization? All that kind of
stuff. and and in addition to uh those
two challenges, how frequently are the
results changing, right? So like you
with that amount of randomness, my
assumption was, you know, you ask an AI
something a thousand times and you get
back a thousand different responses and
it's just, you know, chaos. What we
found when we actually did this work and
I really appreciate there were 600
volunteers who basically went and ran
the same prompt through their you know
claude or chatbt or Google AI and then
they copied and pasted the responses
into a survey form and we did analysis
on which brands showed up. Obviously
every single response was different
every time, right? So like what they say
in the response looks different, but the
brands that show up do have much more
consistency than I was expecting. And
essentially what what we discovered is
that no, Rand is wrong. You can track
brand presence like the percent of the
time that a certain brand shows up or
doesn't in AI responses around a topic
with some degree of reasonableness so
long as you sort of conform to some
statistical um requirements like like
running a certain a prompt a certain
number of times not assuming that all
models are the same recognizing that
things usually change about week over
week not day over day and then getting
prompts that are actually representative
of the real problems that people have.
So, it's possible. Rank tracking though,
rank tracking is full baloney. And I I
will say I read your results with great
interest as somebody who has a couple of
medical clients. I think one of your
questions was cancer
>> uh treatment on the West Coast or
something like that. So, I was I was to
see that. Frankly, the usual suspects
who you would have expected to see were
present, quote unquote. Uh, and so I
don't know from a I don't know exactly
how you would describe it, but sort of
statistically significant visibility
presence.
>> Mhm.
>> At the end of the day, is it really all
that useful to know that yes, I'm there
with my peers roughly 75% of the time.
Like that's um I think that that's what
you would expect. Frankly, it's better
than what you'd get in Google where the
medical results tend to be dominated by
Mayo and Cleveland Clinic and Johns
Hopkins and like a handful of other
government sites. Like great. Okay.
well, at least I'm getting visibility
among my peers. I think that that's it
was I couldn't agree more with your sort
of overall thesis that for the amount of
money being spent and the uh amount of
sort of, you know, executive hemming and
hawing over how are we showing up in AI,
there's not a lot of there there from
where from where I sit. So,
>> yeah, I think that's a a fair
conclusion. I I would say that if what
you're doing is investing in a campaign
to show up more in AI tools and over
time you are using the the sort of
statistical visibility methods that that
we talked about in our research with
dump. No matter what tool you're using
or if you're tracking it yourself or you
built your own thing, Claude can build a
pretty good tracker for you. Yeah. Like
right um so long as you are conforming
to those stats and paying attention, you
can say, "Hey, six months ago we were
visible 60% of the time. Now we're
visible 75% of the time and you have
made progress and you're doing something
real. But should you be paying, you
know, profound $50,000 a month for that?
I don't think so, man. I'm really
skeptical about those. The the big
enterprise ones feel like a scam to me.
>> I have two questions about about this.
One is what was the distribution of AI
of clients that was used? What
percentage was across which product
is the first question. The second
question is what happens when brand gets
writ small to a local right how do it
how would this research had to have
changed to understand that
>> yeah uh great question so first one very
easy we only use three tools and we use
the same model every time so it was
Google AI overviews or if an AI overview
didn't show we ask people to click on
mode so you're getting the overview and
sometimes AI mode and only the first
response, no second prompt, no further
types of things. And that's true across
all the models. And then we used
Claude's
latest opus, whatever it was at the at
the time, right? December of 2025 and uh
chatbt 5.2
I think was the model that was running
in November, December of 2025. Those are
the only models we used. To the second
question,
>> was it roughly equally distributed
amongst your 600 users?
>> Exactly. So we asked 100 people and
between 69 and 90 of them sort of filled
out each thing. So each prompt got run
between about 65 and and 90 times on
each of the different platforms. So
yeah, you're getting pretty substantial
amounts of data. Um, and you can see
from the stats analysis, right, that if
you ran it a thousand times instead of
65 times, you would you would barely get
any more accuracy. But on the second
question, which a fascinating one,
right, what happens when the list of
possible brands is quite small and
limited to a geographic area? And we did
this, I think, with a couple examples,
but one I remember really well is LA
Volvo dealers. So, we asked in the, you
know, in the greater Los Angeles area,
what are the best Volvo dealerships, you
know, to buy my car from? And there are,
I counted on Google Maps, I believe,
somewhere between 9 and 11 total Volvo
dealerships in greater Los Angeles
County that you could buy an a Volvo
from. Only eight of them ever appeared,
ever across all three models. Maybe
Claude had a ninth a couple of times,
but so to the point of no, what if I'm
one of the three who's completely
invisible? Yeah, well, you should
probably figure out why that's
happening. And the top the top four, I
think, were dramatically over
represented. Like they were present
north of 70% of the time and then you
have like these other six, five or six
that are, you know, much more invisible.
So, it's a real thing. AI visibility is
a real thing. It's not that dissimilar
to the early days of ranking in Google
Maps or Google Local, right? Where like
gosh, these guys always show up and
these guys are always pretty invisible.
What's going on? And in AI, I think it's
even more problematic because as you
guys know, right, in local or maps or
whatever, you can click next, right? Or
you could go to the full thing or you
can scroll down and you can see more LA
Volvo dealerships. And even if you're
one of the ones always at the bottom, at
least you're in there. With AI, you'd
have to you'd have to hope that the user
says, "Are there any more that you
forgot about?"
>> Right. Well, I was going to ask I I
thought the question Mike was asking and
maybe I misheard or whatever, but like
I'm curious to know how many local
searches you guys had your panel do
where there where there was not a
particularly finite set of brands. So,
instead of Volvo dealers in LA, personal
injury lawyers in LA, there's several
hundred, right? And my experience
anecdotally, which kind of resonates
with your um your sort of hypothesis
before running the research, is when
I've done these searches and had friends
across the country do these searches and
Mike does them and Greg does them, even
the same exact prompt, we get not just
quantitatively different results, i.e.
the firms differ, but a lot of times we
get qualitatively different results.
Sometimes there's a map. Sometimes it
says, "Oh, check these bar association
directories and here's fine law and
here's super lawyers." and other times
it's just a list of six or eight firms.
And so I think that the the variability
seems to increase actually for if you're
looking at a pool of, you know, dozens
to hundreds of local brands who are
relevant for a prompt as opposed to when
there's only 11 or whatnot.
>> And sometimes Gemini will say to me,
there are no professional golf courses
near the Volvo dealers. And I have never
searched for professional golf courses,
but there's somebody in our work group
who does. And the question is, how does
this happen? Right?
Yeah. Um, one thing I would one thing I
would point out about our research,
David, that we that we did do as sort of
a followup, right? I realized the same
thing you did, which was gosh, what how
do people actually structure their
queries? Like I gave them whatever these
15 or 16, you know, prompts that that
were very specific so that they would
return lists of brands consistently so
that we could measure this. But that's
not how people naturally do it. And so
we asked um one B TOC and one B2B we
asked uh couple hundred people in the
panel kind of at the very end of the
research. Would you please imagine
yourself in a situation where you want
to buy some headphones for a family
member or friend for the holidays? How
would you structure your prompt? Like
what prompt would you send to Chat GBT
or or Google AI mode or whatever? And
then just write that down. And we asked
for a B2B one as well, which I'm
forgetting now exactly what it was, but
uh those those two produced more than
150 unique prompts. As you can imagine,
every single one was different. The only
good news here, the only good news from
a brand perspective and a tracking
perspective is that an extremely high
number north of 95% of them did produce
one or more brands in the list. So like
to your example where it it said, "Oh,
you should just go check find law." We
didn't we did not find that when people
structured their own prompts and then we
ran those prompts which is somewhat good
news like it seems like when the intent
is I want to find something to buy or
I'm looking for a good service provider
the AI tools do produce lists of brands
most of the time I think on this query
string what is fascinating to me is the
dialectic of learning and machine that
will go on and we see this in our
research where sometimes queries are
just the craziest queries I've ever seen
and that the more people get into it,
the crazier they're going to get. It
seems to me that that as time goes on
and they learn they can ask a three
paragraph query. They will
>> one of one of the things they'll append
facets to the end of their already crazy
query. They'll just say, "Okay, and now
do this and then now do this and then
now do this." which I think is like, you
know, it's very like if the text is
already up there in the Google search
box, like sure, I'm just going to add a
couple more terms.
>> You know, in contrast to Google where
you have a ranking and you get pretty
consistent rankings, you know, if you do
uh best PI, lawyer, Orange County,
California, or something like that,
you're going to get some consistency,
pretty consistent with AI, as we're
describing. You know, there may be a
number of candidates, businesses, brands
that satisfy the query. You know, let's
say there are 10, 15 that are
acceptable. You know, there are a bunch
of plumbers that could do the work.
There are a bunch of Volvo dealers that
could sell you the car. the the the
you know the there's that inconsistency
is interesting to me because I'm looking
for a plumber that's going to install my
faucet and I'm and three or five out of
seven may be perfectly fine and so this
one is going to show up this time I'm
going to go validate the the reviews on
Google and I'm going to call that person
whereas somebody else might get a
different result and call you know in
the local pack it's going to be pretty
rigid or the LSAs that show and you're
going to get business funneled to the
same people most of the time or
disproportionately to the people that
are ranking and and that's not going to
happen as readily it seems to me in an
AI context. So basically what I'm what
I'm showing is a chart which you know I
in the show notes I realize you guys
will will put point to this research but
this particular graph is showing the
number of unique brands that were
mentioned in the responses which goes to
what Greg and David have just been
talking about and essentially what
you're seeing here right is that it
really depends like it hugely depends on
the query space and the intent space.
So, in in the LA Volvo dealership
example, right, where there's only
whatever 11 Volvo dealerships that exist
in the greater LA area and only nine of
them showed up across the 83 responses
in ChateBT and Google and and Claude,
but sci-fi novels, right? We asked like,
"Hey, recommend some science fiction
novels from the last few years that
people might like." And 11 unique sci-fi
novels were mentioned across 99
responses. Like, it's just crazy. It's
wackadoodle. It's all over the place.
You know, there's there's a couple of
sci-fi novels that have more visibility
than everything else because they're
very popular and wellknown and sold
really well and whatever, but my god,
like that long tale is huge.
>> And sometimes those longtail ones are
the ones that are mentioned first,
>> right?
>> Does this then become more
>> Go ahead, Greg.
>> Well, I was just going to say, does this
then become a more ironically democratic
medium versus Google?
I think the answer to that is maybe, but
it's it's just a different sort of
ranking system. Like one thing I think
that's probably important to realize and
I I had some skepticism around this too,
right? But people keep publishing on
this topic where they say Google
visibility often is related to but not
fully overlapping with AI visibility. In
the Volvo dealership example, those nine
dealerships also tend to rank well in
Google Maps and local. Yeah. you know,
in the in the normal search results. In
the case of those sci-fi novels, I
didn't see you guys, but I didn't see a
single novel ranking at all. There's no
like one page on Penguin Random House or
Amazon that ranks really well for sci-fi
novels or best sci-fi novels of 2025.
It's all lists, right? It's like, you
know, Publishers Weekly has a list,
Esquire has a list, Reader Digest has a
list of good books. the sources are more
distributed and fragmented than in than
in local business.
>> It's just really good for Spark Toro's
business model. It seems like right like
what you need to know what the lists are
that you got to be mentioned on. So I
this is you know we we sort of think
about the influencing audiences through
things that may not drive traffic as
being our primary goal. like we're
supposed to tell you what your what your
people do on the internet and where and
who they are and that that feels very
important to me as we move forward in
digital marketing whether it's sparro or
your own research or anything else like
I
as you mentioned Greg like one of my one
of my big theories here is just that in
the long-term future we are going to be
more and more in the platforms that's
where all the visibility important
visibility is going to come from rather
than how do I get my link to rank high
in whatever platform and then drive
traffic to my website. Well, let's let's
um
>> I have a quick question here. Just that
Google has a unique advantage in local
in that they have this huge knowledge
graph of everything from businesses down
to products and services and you know
and I did a search the other day where I
put somebody's name in from a case I'm
working on review fraud and they said
the only place this person's name is
mentioned is in this one review and
there's no other mention of this person
and they they told me it was from a
review source. I didn't ask if it was
from a review source. I just said what
do you know about these names and is
there any mention of them in Colorado
and I said oh this is from a Google
review and that's the only place we see
it but the question is how much is that
going to that advant that's an advantage
both from a marketing side but also from
a technical side that having that
structure
I think it is helpful but possibly
replicable with enough time and money
and effort from open AAI or Microsoft or
somebody like that what I don't think is
replicable Mike is the click the
clickstream data that Google has about
what people are happy and unhappy with
in search results over decades that data
as a department of justice case showed
us right like that is the number one
ranking factor is the most critical
thing that gives Google this huge
advantage I don't know
>> which you've been saying for 20 years
not maybe 10 whatever
>> right like they they know that these
four Volvo dealerships when they send
people to their websites people buy
Volvos on those sites and like transact
with them and when they send people to
these other places, they're not as
happy. And so they put the the ones up
there that make people happy and that
makes people addicted to using Google.
And you know, we're I'm sure we'll talk
about this in a minute, but like when
you look at the datos research and you
see what happened in Q4 where catch GBT
basically stops growing, flattens out
and declines in usage and Gemini starts
eating their lunch. I think that that
fruit is coming to bear.
>> Well, that's that's entirely a byproduct
of Google's monopoly position in in
search and with these other products.
And we we I don't want we don't want to
go down. Gemini's gotten much much
better for sure.
>> Yes, Gemini's gotten much much better.
And
>> Google has this huge advantage of being
able to like put it in front of you.
Sort of the same way Instagram was able
to make threads bigger than Twitter over
the last couple years by throwing
threads into everybody's Instagram um
and forcing people to sign up. Well,
nudging people to sign up in in pretty
compelling ways. But I I would say right
that like the the narrative that was so
dominant in LinkedIn feeds among lots of
influential marketers over the last
couple years of like chatbt is going to
crush Google. Chat GBT is going to take
over search. You know, Google's over.
Bet against them. That looks like pretty
dumb advice to me these days. Here's the
truth of that statement, though. What
people like is the UI, the UX of AI,
generative AI. People really like the
conversational nature of that, the
ability to ask follow-up questions. That
is what people prefer to traditional
Google search. Now, Google has
integrated that into search now or is
increasingly integrating that into
search. But, you know, when when chach
first came out and it was like old
Google versus chat, that comment had
more credibility even though it was it
was naive in some respect because of the
transformative nature of that user
experience. And now felt the opposite. I
don't you guys tell me if I'm crazy but
my
>> but we firstly that's a given rand now
if you're crazier we can go there
>> yeah just how crazy is Rand no but my my
theory around this was like Chachi BT's
interface felt to me like ask Jeves of
the late 90s like you you formulated a
question you gave details you know
you're supposed to structure this big
thing like hey I'm looking for a new
Volvo in the LA area, maybe the XC60 or
90. I want something that has a plug-in
charge hybrid. I want it to have less
than this many miles. I want the
dealership to be offering some sort of
rebate or incentive. And you can give
all that information, right, to chache
BT kind of like how you could to ask
Jeieves and then in a butler
service-like way, it will, you know,
give you responses and whatever. And
then Google came around and innovated
and was like, "Hey, all you have to do
is enter Volvo dealerships. You don't
got to say nothing else. we'll we'll get
it for you. Right. [laughter] It was
like I don't want to debate this, but
yes, you're crazy. Okay. I'm think I
think I think that Chat GBT and and
Gemini and the others
>> crazier
>> really frustrating to use at times
because they're so verbose, right?
Sometimes you just want the information.
But Google can be also incredibly
inefficient to use. Depends on where you
are in the funnel and what you're
looking for. Or if I'm looking for
Italian restaurant near me, Google
totally 100%. If I'm doing your query,
all I have all these criteria, ChachiBT
is going to be or Gemini is going to be
a lot easier and better to use than
going back to Google and again and again
and refining and clicking and clicking
back. It's just become super inefficient
in in certain higherfunnel contexts.
That's that's my
>> I was thinking about this the other day
that because of the way these fan out I
can do one query on chat GBT or Gemini
where I would have had to have done 10
before that they know the fan out I'm
likely to use and they're bringing
information from this broad range. So in
that sense the environmental impact is
probably less than my son and wife cla
accuse me of.
>> Yeah. I mean one thing thing I will say
about the AI usage is I I think it's
hard to read the research that we just
did right that produces all these like
sort of lists of brands and ever trust
one response from an AI again. What I've
found is that after doing this research,
I now, for example, I'm currently
hunting for a pair of classic men's
shoes. Like I want Oxfords and I want
the the like rubber soles because it's
wet and rainy in the Pacific Northwest,
but I still want nice shoes. And so
rather than like if I ask Catchy BT or I
ask Google AI overview,
I don't trust answer one. I hit refresh.
Like I I go and ask again and again and
again and I get more lists of different
brands that come up, right? And then I'm
like, okay, after about 10 responses, I
know that I've mostly exhausted the list
of brands, but I'm only any one response
is going to be not wrong, but
incomplete. And that makes me so
frustrated. Like it it makes me
frustrated to have this knowledge. It's
almost a curse like a Pandora's box of
knowing how AI works now and realizing
that anytime I ask, I kind of have to
ask 10 times if I really want to get a
thorough response. Oh, can I can I ask a
segue here, Greg? Not to hijack.
>> Yes, please. Okay. So, this isn't a
great but I think it's a perfect
example. So, to talk about this. So,
let's say Randy, you do these sort of
recursive searches or whatever you want
to call them to get your complete, you
know, set of of considerations or
whatever.
>> What do you do once you have let's say
two or three potential candidates of
things you actually want to buy? What
would you do in that scenario? Uh I mean
then I I sort of have my knowledge that
I have collected and I go to those
websites and
>> directly to the websites.
>> Yeah, of course. Yeah.
>> Okay. So you're
>> you're going to alo you're going to
aldo.com and then searching on Aldo.com
for the name of the shoe or how like
>> Well, so this is the other frustrating
thing, right? Like once this happened to
me last night because of this this hunt,
right? Like Google gave me a list. There
were a few Japanese shoemakers that I
was actually very interested in when I I
had to ask ChachiPT or sorry, I think I
was using Google AI mode and I was like,
"Hey,
thank you for recommending these like
now I need the links like can you please
link to the shoe on the website?"
And as you as I'm sure you're aware,
seven out of 10 of those links worked
great and three out of 10 of them went
to a 404 or like a Yeah. Whatever.
>> Well, so this is this is the segue here
is that that you're which I don't
disagree with. your your prediction that
zero click is kind of going to increase
and increase and increase and I think
that that's certainly true for all of
the consideration phase the 10 the 10
searches that you did right that where
you might have actually visited 22
websites before you came up with your
final three choices
but that at the end of the day that the
the what is the click like where is the
click happening where is the purchase
happening right uh and I feel like go
ahead no I I 100% agree with where
you're going. David, I agree that just
because we live in a zero-click world
more and more does not mean sales are
going away.
>> Okay.
>> At the end of the day, at the end of
this process, a shoe or several will
still be purchased. A Volvo dealership
in LA will still get someone's business.
Several sci-fi novels will still be
purchased on a Kindle or, you know, over
Amazon. That's not going away. I don't
think commerce is ending. I think the
discovery, the attention earning, the
audience influencing, the audience
building, all of those phases which
happened historically on your website
are being disintermediated and will now
happen on platforms you don't own and
control. And so that old advice of not
building on rented land, which which I
gave on stage for 20 years, that's now
dead wrong. You must build on the rented
land where your audience attent
audience's attention exists or you will
lose. And it raises the question about
the the locus of the transaction. If
you've got the agentic commerce profile
and the universal commerce profile and
there's a movement, a migration of
sales. It hasn't happened, but this is
where Google wants to take it. I mean,
this is Google's revenge against Amazon,
right? For years and years, it tried to
compete with Amazon. It couldn't do its
own checkout process, but now here it
is. and they're the merchant center and
all the product data they have, they
have a really good shot at at really
kind of going at Amazon here. And so the
the customer, you know, it reduces
everything to a commodity. I mean, the
brand still matters because you still
prefer shoe A to shoe B, but it matters
the whole brand presentation and the
look and feel and the user experience on
the website and everything that was part
of that sort of goes away and becomes
standardized on some third party
platform where the transaction is
happening. Yeah, I think this is it's
it's sort of the logical endgame of the
American cultural approach to commerce
which which is basically everything is
big big is the thing that matters most
reduce the number of brands and number
of uniqueness and you can you can feel
it in sort of American culture across
the board right our architecture has all
become the same because getting a
license for an apartment building that
looks any different from the 10 models
that you know have been approved by
boards
is super hard and so let's just build
one of these ones. You know, strip malls
all look the same. The the number of
unique stores, restaurants, bars,
shoe shops, bakeries, whatever, in any
location in the United States has has,
you know, been cut by 90% since the 80s,
I think. So, like it's this reduction in
uniqueness toward a singular commercial
culture. And I think Google and Amazon
and OpenAI and Claude, they're all
trying to get to that point where they
become the one the one place where you
not only do all your research, but also
finalize the transaction. I don't know
how successful that'll be and when it'll
be successful, but
>> that's what I was hoping. I wanted your
prediction on that exact question. When
when will true agentic commerce be a
real thing? That's my question.
>> It's it's so not it. I feel like David,
we could maybe in two years have a real
prediction around that once,
>> okay,
>> once these like protocols get adopted or
don't get adopted or change or Google
tries to force them into the shopping
function and no one adopts them or
whatever. Like I need some data before I
could make a prediction. It wouldn't
surprise me.
>> You can do like you do with fusion
reactors. 5 to 10 years, David.
>> It's always going to be 5 to 10 years.
When so when is Tesla going to you know
be number one in the car sales market?
just a couple years like that'll
>> yeah well part of the reason I bring it
up on the agent commerce side is that we
do like Google is making a real push
these days uh and I haven't seen it in
chat GBT uh probably because I don't
have the the sort of knowledge graph
that Mike was talking about but we see
in a lot of different categories now
like have AI check prices or you know
they've had duplex for a long time like
book a table at the restaurant through
their open table you know MCP or
whatever it is right so I like I
actually see this you know potentially
happening
first in local where it's a maybe more
of a known commodity, right? Like, okay,
yeah, I know what it's like to book a
table. I don't actually need to deal
with all this crap. I'm going to have
the agent do it. I do think though, like
at the end of the day, hopefully people
still have taste. Like, no, I actually
need to know that this shoe like is
actually what I want. I'm not sure I'm
going to trust a robot to actually go
and buy it for me. Well, in in in a
hopeful note, in a hopeful note, just to
interject this, there was a a study of
3,000 people in the US, UK, and Canada
that found that the proportion of
consumers who shop online daily fell uh
12 12 points year-over-year with more
people going back into stores. So,
that's that's a hopeful note. I I just
want to throw that in. So in the last in
the last few minutes that we have here
and we've really just scratched the
surface on some of these topics. Let's
talk about measurement. How do you
figure out what's working in the future?
Let's talk about what does it mean now?
You know performance marketing versus
brand marketing. This has been a big
debate since the Google antitrust
trials. Obviously build your brand your
brand gets clicked on. Google will
reward that. What what do you see
happening in those two arenas?
Measurement the reliability of
measurement. to come back to our first
topic and then this idea of brand
building on other channels versus
performance marketing.
>> Yeah, it's I think this is a quite
interesting era for analytics and
measurement because essentially what's
happened is that the first quarter
century of digital marketing
was all about treating everything
digital as perfectly trackable and
therefore attributable. Right? like I
know that this blog post was seen by
these people who then later came back to
the website and signed up for the email
list in this proportion and of those
here's how many converted to customers
and here's their lifetime value. So
therefore this is how much that blog
post is worth and how much we should
more effort we should put into it. That
era of like content marketing and all
all organic digital marketing behaving
like performance is being thrown out the
window in a world where you know chat
GPT does not report to you how many
times your brand showed up with what
sentiment in what you know level of
visibility and so therefore you might
start showing up at the top of a high
intent you know commonly used sort of uh
set of prompts and you see a spike in
sales and you're like what what
happened? I have no idea. I don't unless
you're unless you're like tracking all
the platforms, you know, oh, I was
separately tracking my Instagram mention
visibility and I have, you know, I don't
want to say, well, I'm going to say
alert mouse because Google alerts
doesn't work anymore, right? But like,
you know, something that's tracking web
alerts like that. Something that is
tracking your visibility on Instagram
and YouTube and Reddit and all these
kinds of places so that you you actually
know when you get talked about in some
place even though there's no link. Very
frequently there's no link. We see this
with Spark Toro all the time. Someone
this is a few months ago we were
featured in a very popular Tik Tok
video. I had no idea because I don't
monitor Tik Tok and you know it's kind
of it's it's hard to see in there and
someone sent me the video and it's like
oh my god half a million views and
here's this guy being like spark Toro is
the answer to doing this and this and
this. Holy crap. No wonder we saw this
crazy ass you know sign up spike that
week. The measurement the ability to say
what was that Tik Tok video worth to us?
We don't know right like it's really
tough. It's all time series measurement.
It's gone back to brand. It's just like
how you would measure uh a billboard
that you put up on the highway in 1965.
Like what does same store sales do in
the 10 mile radius around that
billboard? What's the lift compared to
the billboard you ran across town and
the 10 milei radius around that one?
That's how you're measuring and
attributing
>> something in those examples. You know
specifically where that billboard is. So
there's a sort of fixed point to
measure, right? I feel like you were
just saying like you don't you didn't
know where the Tik Tok billboard was.
All of a sudden, it just happened. So,
yep.
>> So, Google always benefited from the
delusion of of accuracy and they're not
going to be able to offer that anymore.
Do you see that affecting
>> Why? Why, Mike? Why won't they be able
to offer that anymore? They'll still be
>> because your last clicks are dropping. I
mean, they're plummeting off the page.
That's why
>> I think they're going to I think they're
going to really lose out from the
organic perspective. But I think on the
paid side, that's where they're going to
be,
>> right? They're because what Google is
amazing at, and this is true for Meta as
well, is they know what you're going to
buy and where you're going to buy from
long before you actually do it because
they have so much behavioral data from
history and they're like, "Hey, Ran's
investigating all these shoes, but
eventually he's going to spend $800
buying the Crock Crockett and Jones ones
from the UK, right? And like I'm trying
to find something, but like nope, that
that's probably where I'm going to end
up buying and whatever." And they know
that. And so they they're like, "We
should make sure that Crockett and
Jones's ads showed Arand, even if he
never actually sees them, like he
doesn't even know that he's necessarily
seeing them in his feed or like he
scrolls past it too quickly or whatever,
because then we can take credit for that
sale when he eventually buys." And that
is happening across the web. And Google
is amazing. And they have convinced
executives, CMOs, and especially CFOs
that having that data of your Google ad
was seen by this person who eventually
made this purchase is is a a winning
combination. And unfortunately, a ton of
these execs are unwilling to do the only
thing that you can do in this scenario,
which is to test turning off your ads
and seeing how many people would have
bought anyway. There's too much fear.
Too much fear. Too much fear of what if
our quarterly results are slightly down
because of that? I won't hit my target.
I'll be fired. Like people aren't
willing to even try it. What about local
businesses though? So these guys have
been these guys have been hit by oh you
got to be in all these places. You got
to be in Reddit. You got to be in Tik
Tok. You got to be on Instagram. You got
to be over on Google. And you got to be
on Facebook. And they do what they can.
Some of them are very sophisticated.
We've encountered some very very
sophisticated local businesses. Others
are just sort of trying to make it work
and they're doing what they sort of
instinctively, you know, my customers
told me this and there's just no way for
them to do the kind of scientific
elimination diet kind of advertising
testing that you're describing. There's
just no chance. So, they're going to
stick with what they
>> don't need. They don't need to do it
right at their scale. That's just not
that important. And I do I do really
disagree with the like Gary Veaynerchuk
you have to be everywhere. You have to
be always posting across all these
things. You know what I'm I'm going to
say what we all know which is like it's
the 8020 rule. 80% of your audience's
attention is in 20% of these platforms.
If you're a Volvo dealership, Google and
Google local maybe a little bit bit of
AI visibility now like that really
matters. Tik Tok, nope. Instagram, I I
don't think it matters that much. Edit,
maybe a little bit. YouTube, possibly a
little bit. Do you need to be on
Pinterest? No. Do you need to be on
threads? No. Do you need to be on
Twitter? No. Like, you can exclude a ton
of these things and pick the top two or
three, and if you're really good at
those, you're going to be you're going
to do great. Okay, let me challenge you
on this for a second. Where do you build
your brand today? Yeah. Is that a local
question, Greg, or is that a national
question?
>> It's a general it's a general question
with an emphasis on local. This the
right answer to all marketing questions
for those of you who are joining us for
the first time is always it depends,
right? And like and this is one where it
depends. And the only the only way I can
answer this truly accurately, Greg, is
to say it's the combination of three
things. You want to find the
intersection of these three ven diagram
or three circles in a ven diagram. One
is where is your audience actually
paying attention right on this
particular topic. Not are they going to
Facebook? Sure they're going to
Facebook, but are they paying attention
to your topic on Facebook or Instagram
or Reddit or Tik Tok or Google or AI
overviews or whatever. The second one is
what are you really good at? Because you
know what? If you suck at Instagram and
you're just having a terrible time
there, like don't don't put your energy
there. Even if your audience is there,
that's not going to be your focus. But
if you're great at sort of the like
local maps optimization and getting into
AI overviews and being at the top of
Google search results, good enough. Like
that's going to be really good enough to
focus your your attention. And then the
the third one that I think is important
is an area where you can have a unique
value proposition and something your
competition doesn't have. Like you can
do it uniquely better than your
competition. So you care about this
space. You're good at it. You have
passion and interest in it. your
audience is actually there and you can
do something unique, competitively
unique. Focus on that. Ignore the rest.
Don't try and be in every channel if
you're a local business.
>> All right? And that may only reflect,
that doesn't need to be your whole
business. That's just your digital
business, right? I mean, it's like this
is what meets that criteria. I'm still
going to sell all these different brands
of Oxfords, but this is the one that I
know Ran's going to buy, so I'm going to
focus on this one online.
>> Exactly. Right. Exactly.
>> Okay. All right. I wish we had more
time, but unfortunately we don't. Great
advice, Rand Fishkin. Thank you again
for being on with us.
>> Thanks so much, Rand. Appreciate your
time as always.
>> We'll have you back for the We'll have
you back for the I think it'll be like
the fifth act at this point. So,
>> I can't wait. I look forward to it.
>> Well, maybe we should do it in innings
then.
>> Yeah. Yeah.
>> I'm I'm like Tom Hanks on SNL. Just come
back to host many times. Five timer.
Five timer. Yeah. All right. Join the
club.
>> Okay. Thank you very much.
>> Bye. Cheers, guys.
[music]

# Research Observation

Rand Fishkin's framing from the video:

Validate that AI brand presence can be tracked statistically (presence rate, not rank) → Recognize that local AI visibility already creates significant winners and invisible businesses → Accept that enterprise tracking tools are overpriced and the methodology is replicable → Shift measurement from click attribution to time-series brand lift → Build platform presence on rented land where audience attention lives, not just on owned websites → Focus channel investment on the intersection of audience attention, personal strength, and competitive uniqueness