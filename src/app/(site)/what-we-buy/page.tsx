import type { Metadata } from 'next';
import Link from 'next/link';
import { Eyebrow, Section } from '@/components/ui/primitives';
import { pageMetadata } from '@/lib/seo';

const TITLE = 'What We Buy — Gold, Silver, Coins & Bullion';
const DESCRIPTION =
  'What PureWeight buys in Gainesville: gold jewelry, sterling silver, U.S. and world precious-metal coins, and bars or bullion — and what helps determine the value of each.';

export const metadata: Metadata = pageMetadata(
  'what-we-buy',
  '/what-we-buy',
  { title: TITLE, description: DESCRIPTION },
);

export default function WhatWeBuyPage() {
  return (
    <Section material="steel" labelledBy="wwb-heading" className="pb-24 pt-36 lg:pb-36 lg:pt-44">
      <div className="shell">
        <div className="mx-auto max-w-3xl">
          <Eyebrow className="mb-8">What We Buy</Eyebrow>
          <h1 id="wwb-heading" className="font-display text-chapter text-ivory">
            Gold, silver, coins
            <span className="accent-italic text-gold-high/90"> and bullion</span>
          </h1>
          <p className="mt-8 max-w-xl text-lead text-ivory/72">
            At our Gainesville, Georgia shop, four categories cover nearly everything that comes across a
            precious-metal counter. Here is what belongs in each, what can affect its value, and what is
            worth knowing before you bring yours in.
          </p>

          <div className="article-body mt-14">
            <h2 id="jewellery" style={{ scrollMarginTop: 'calc(var(--nav-h) + 2rem)' }}>
              Gold jewelry — in any condition
            </h2>
            <p>
              Jewelry is what most people actually own: chains, rings, bracelets, earrings,
              pendants, and the drawer of odds and ends that accumulates around them. A snapped chain
              contains exactly as much gold as an intact one. A single earring, a bent brooch pin,
              or a ring whose stone fell out years ago can still have real metal value. Nothing needs
              to be repaired before you bring it in.
            </p>
            <p>
              What decides jewelry&apos;s metal value is not how it looks but what it measures: the karat
              of the alloy, the weight of actual gold once stones and non-gold components are allowed
              for, and the spot price at the time of the in-person assessment. If the karat marks on
              your pieces are worn or missing, that is normal — the metal can be tested rather than
              assumed. Our guide to <Link href="/purity-and-weight">purity and weight</Link> explains
              how those measurements work.
            </p>
            <p>
              There is usually no benefit to cleaning or repairing jewelry before bringing it in.
              Polishing can damage stones, soften old settings, or remove patina that may matter on
              an antique piece. Bring items as they are.
            </p>

            <h2 id="silver" style={{ scrollMarginTop: 'calc(var(--nav-h) + 2rem)' }}>
              Silver — sterling, coin silver, and foreign grades
            </h2>
            <p>
              We buy solid silver, including sterling marked 925, sterling jewelry, flatware and
              serving pieces, coin silver, and many foreign grades such as 800 or 835 silver.
              Weighted sterling items can also contain recoverable silver, although non-silver fill
              or internal components must be allowed for when the item is assessed.
            </p>
            <p>
              Silver-plated items contain only a thin layer of silver over a base metal and are not
              something PureWeight purchases. If you are not sure whether an item is solid silver or
              plated, bring it in — identifying what you have is part of the assessment.
            </p>

            <h2 id="coins" style={{ scrollMarginTop: 'calc(var(--nav-h) + 2rem)' }}>
              Coins — metal value first, collectible value considered
            </h2>
            <p>
              American Gold Eagles, American Silver Eagles, Morgan and Peace dollars, pre-1933 U.S.
              gold, 90% U.S. silver coins, and world bullion or precious-metal coins are all examples
              of items we may see. Metal value begins with the coin&apos;s actual precious-metal content
              and the spot price at the time of the in-person assessment.
            </p>
            <p>
              We also consider whether a coin may have collectible value beyond its melt value. If we
              believe a coin may be worth more as a collectible than what we can justify paying for its
              metal content, we will tell you rather than simply treat it as scrap. This is not a formal
              numismatic appraisal, but our goal is to help customers understand the potential value in
              what they bring us and avoid overlooking an obvious collectible premium.
            </p>

            <h2 id="bullion" style={{ scrollMarginTop: 'calc(var(--nav-h) + 2rem)' }}>
              Bars and bullion — the stamp is checked, not simply trusted
            </h2>
            <p>
              Investment bars and rounds state their own weight and fineness, usually with a refiner&apos;s
              mark and sometimes a serial number. Those markings are useful, but the physical weight
              and metal still need to agree with what is stamped on the piece. Recognized bullion is
              assessed on its own terms rather than automatically treated as scrap.
            </p>
            <p>
              Original packaging, assay cards, receipts, or certificates can be useful when you have
              them, particularly with investment products and collectible coins. If you do not have
              paperwork, the item can still be examined in person.
            </p>

            <h2>Other items that may contain precious metal</h2>
            <p>
              Older watch cases, dental gold, medals, thimbles, cigarette cases, and other unusual
              objects can contain gold or silver even when that is not obvious at first glance. If you
              think an item may contain precious metal, bring it in and we can take a look.
            </p>
            <p>
              Gold-filled, rolled-gold, and gold-plated items are not solid gold and are not items
              PureWeight purchases. Likewise, we do not purchase silver-plated items.
            </p>

            <h2>Before you visit</h2>
            <p>
              No item is too small for us to look at. Bring your items as they are and bring a valid
              government-issued photo ID, which is required for every sale. If you have receipts,
              appraisals, certificates, grading paperwork, original packaging, or other supporting
              documentation, bring that too — it can help us understand provenance, authenticity, or
              potential collectible value.
            </p>
            <p>
              If you want to prepare further, the <Link href="/faq">frequently asked questions</Link>{' '}
              explain karat, troy weight, hallmarks, and what to expect at the counter in plain language.
            </p>
          </div>

          <div className="mt-16 flex flex-wrap gap-4 border-t border-gold-antique/16 pt-10">
            <Link href="/contact" className="btn-primary">
              <span className="relative z-10">Visit Our Shop</span>
            </Link>
            <Link href="/#services" className="btn-ghost">
              See the four categories
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
