import type { Metadata } from 'next';
import { BeamDivider, Eyebrow, Fact, Section } from '@/components/ui/primitives';
import { brand, business, isVerified, structuredHours, type DayHours, type Verifiable } from '@/lib/site';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata('contact', '/contact', {
  title: 'Contact',
  description:
    'Visit PureWeight Gold Exchange in Gainesville, Georgia to have your gold, silver, jewelry, coins, or bullion assessed and priced in person.',
});

const DIRECTIONS_URL =
  'https://www.google.com/maps/search/?api=1&query=250%20John%20W%20Morrow%20Jr%20Pkwy%20%23121%2C%20Gainesville%2C%20GA%2030501';

/**
 * CONTACT
 *
 * Every detail on this page is a verified field, or absent. Contact
 * pages are where placeholder addresses and invented phone numbers most often
 * survive to launch — and a wrong number on a gold business's contact page
 * sends people carrying valuables to the wrong door.
 */
export default function ContactPage() {
  // `link` is declarative ('tel'/'mailto') because Fact sits inside the client
  // boundary and cannot receive functions from this server component — passing
  // a render function here was a build-breaking serialization error.
  /*
    A visitor deciding whether to set off with valuables in their pocket wants
    to read today's row, not parse a sentence. When the owner has filled the
    whole week in the Keeper it renders day by day — the same seven rows that
    feed the OpeningHoursSpecification markup, so the page and the search
    result cannot say different things.

    The free-text line remains the fallback, and it is a real answer rather
    than a degraded one: "by appointment" is how this business may actually
    work, and a grid would either lose the nuance or invent hours to fill itself.
  */
  const week = structuredHours();

  const details: {
    label: string;
    field: Verifiable<string>;
    link?: 'tel' | 'mailto';
    week?: DayHours[];
  }[] = [
    { label: 'Telephone', field: business.telephone, link: 'tel' },
    { label: 'Email', field: business.email, link: 'mailto' },
    { label: 'Address', field: business.address },
    {
      label: 'Opening hours',
      field: business.openingHours,
      week: week.length > 0 ? week : undefined,
    },
    { label: 'Service area', field: business.serviceArea },
    { label: 'Appointments', field: business.appointmentProcess },
    { label: 'Payment', field: business.settlementMethods },
  ];

  return (
    <Section material="stone" labelledBy="contact-heading" className="pb-24 pt-36 lg:pb-36 lg:pt-44">
      <div className="shell">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Eyebrow className="mb-8">Contact</Eyebrow>
            <h1 id="contact-heading" className="font-display text-chapter text-ivory">
              Speak with <span className="accent-italic text-gold-high/90">PureWeight</span>
            </h1>
            <p className="mt-8 max-w-md text-lead text-ivory/72">
              Visit PureWeight Gold Exchange in Gainesville, Georgia to have your gold, silver,
              jewelry, coins, or bullion assessed and priced in person.
            </p>

            <BeamDivider className="mt-12 max-w-xs" />

            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-primary mt-12"
            >
              <span className="relative z-10">Get Directions</span>
            </a>
            <p className="mt-4 text-sm text-ash">Located inside Ella&apos;s Gift Box.</p>
          </div>

          <div className="lg:col-span-7">
            <dl className="border-t border-gold-antique/16">
              {details
                .filter((item) => item.week || isVerified(item.field))
                .map((item) => (
                <div
                  key={item.label}
                  className="grid gap-2 border-b border-gold-antique/12 py-7 sm:grid-cols-3 sm:items-baseline sm:gap-6"
                >
                  <dt className="text-[0.66rem] tracking-[0.18em] text-ash uppercase">
                    {item.label}
                  </dt>
                  <dd className="text-sm text-ivory/78 sm:col-span-2">
                    {item.week ? (
                      <ul className="max-w-xs space-y-1.5">
                        {item.week.map((day) => (
                          <li key={day.label} className="flex justify-between gap-6">
                            <span>{day.label}</span>
                            <span
                              className={day.closed ? 'text-ash' : 'tabular-nums text-ivory/78'}
                            >
                              {day.closed ? 'Closed' : `${day.open} – ${day.close}`}
                            </span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <Fact field={item.field} link={item.link} />
                    )}
                  </dd>
                </div>
              ))}

              <div className="grid gap-2 border-b border-gold-antique/12 py-7 sm:grid-cols-3 sm:items-baseline sm:gap-6">
                <dt className="text-[0.66rem] tracking-[0.18em] text-ash uppercase">ID required</dt>
                <dd className="text-sm text-ivory/78 sm:col-span-2">
                  A valid government-issued photo ID is required for every sale.
                </dd>
              </div>

              <div className="grid gap-2 border-b border-gold-antique/12 py-7 sm:grid-cols-3 sm:items-baseline sm:gap-6">
                <dt className="text-[0.66rem] tracking-[0.18em] text-ash uppercase">Helpful documents</dt>
                <dd className="text-sm leading-relaxed text-ivory/78 sm:col-span-2">
                  Bring any receipts, appraisals, certificates, grading paperwork, original packaging,
                  or other documentation you have. These can help us understand provenance,
                  authenticity, or potential collectible value. If you do not have paperwork, bring
                  the item itself and your photo ID.
                </dd>
              </div>
            </dl>

            <p className="mt-8 text-xs leading-relaxed text-ash">
              {brand.shortName} may discuss an item and provide general information by telephone or
              email, but any final purchase offer is made in person after the item has been examined,
              weighed, and tested as needed.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
