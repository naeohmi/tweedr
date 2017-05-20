DROP TABLE IF EXISTS tweedrfeed;
CREATE TABLE tweedrfeed(
    id SERIAL PRIMARY KEY, 
    tweed VARCHAR NOT NULL
);

INSERT INTO tweedrfeed (tweed) VALUES
('you think Ninja’s sneak up on their family members just for fun? #FunThoughts #MyBrain'),
('Don’t be such a potty mouth! Introducing @virgintrains magic new talking toilets (honestly!) http://virg.in/tlh '),
('Bam-BOOO: More Bad Press for Pandas http://www.mediabistro.com/prnewser/bam-booo-more-bad-press-for-pandas_b71206 …'),
('I’m becoming convinced that the more hashtags a person uses, the less money that person makes… '),
('Gatsy-inspired hair by Dez at Hair Therapy for Women! #TBBJBWOTY pic.twitter.com/6Ykna1sWtC '),
('Holy heart stopping coat love batman: http://nym.ag/184yNOT #wishlist http://ow.ly/i/2ZUG5 '),
('YOU WILL READ THIS HILARITY NOW: Madonna’s Diet Is the Hardest I Have Ever Tried – The Cut http://nymag.com/thecut/2013/07/madonnas-diet-is-the-hardest-i-have-ever-tried.html … '),
('How I got published on Amazon! http://r.ebay.com/ogdiZ5 '),
('Tying the knot doesn’t have to cost a fortune. See how this #bride saved over $20K on her #wedding: http://po.st/IbpZyg '),
('Learn the differences between a chipotle and an ancho with this video from America’s Test Kitchen: http://lifehac.kr/MzCjosw ')

