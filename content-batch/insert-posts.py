#!/usr/bin/env python3
"""
Insert the October 2026 batch posts at the top of STATIC_BLOG_POSTS in
src/lib/blog-posts.ts.

Why a script: blog-posts.ts holds markdown inside TypeScript template literals,
so hand-editing risks breaking a backtick or a ${...} sequence. This builds the
records programmatically and checks for both hazards before writing.

Run from the repo root: python3 content-batch/insert-posts.py
"""

import os
import re
import sys

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TARGET = os.path.join(REPO, "src", "lib", "blog-posts.ts")

V1_BODY = r"""A Florida landlord can keep part of a security deposit for smoke damage, but only the part that is genuinely damage rather than normal wear, and only if the written notice goes out inside the statutory window. Miss the deadline and you lose the right to claim the deposit at all, no matter how bad the damage is.

That second half is what actually costs owners money. I have seen a legitimate $2,400 smoke remediation claim become $0 because the notice went out on day 34.

## What are the deadlines in Florida?

Florida Statute 83.49 sets two different clocks, and which one applies depends on whether you are making a claim.

- **No claim:** you must return the deposit, with interest where required, **within 15 days** after the rental agreement terminates.
- **Claim:** you must give the tenant written notice of your intention to impose a claim **within 30 days** after the rental agreement terminates.

The notice has specific requirements. It must be sent by certified mail to the tenant's last known mailing address, or by email. It must state the amount you are claiming, the reason for the claim, and that the tenant has **15 days** to object in writing.

If the tenant does not object, you may deduct the claim and must remit the balance within 30 days after your notice of intention to impose the claim.

**The penalty for missing the 30 days is severe.** Under 83.49, a landlord who fails to give the required written notice within 30 days forfeits the right to impose a claim on the deposit and may not seek a setoff against it. You can still file an action for damages, but only after returning the deposit to the tenant. You go from holding the money to suing for it, which is a completely different position.

Our [full breakdown of the 15/30 day rule](/blog/security-deposits-florida-15-30-day-rule) covers the mechanics in more detail.

## Is smoke damage normal wear or actual damage?

This is the fight, and the answer depends on what the smoke actually did.

**Normal wear and tear** is the deterioration that happens from ordinary use over time, without negligence or abuse. A tenant is not responsible for it.

**Damage** is harm beyond ordinary use. Heavy indoor smoking usually produces damage, not wear, because it deposits tar and nicotine residue on walls, ceilings, trim, HVAC components and carpet, and it leaves odor embedded in porous surfaces.

Here is the distinction that matters in practice:

| Condition | Usually wear | Usually damage |
|---|---|---|
| Faint odor, no visible residue, paint already at end of life | Yes | |
| Yellow or brown nicotine staining on walls and ceilings | | Yes |
| Residue on HVAC coils and ducts requiring cleaning | | Yes |
| Odor that survives normal cleaning and requires a sealing primer | | Yes |
| Scorch marks or burns on counters, flooring or fixtures | | Yes |
| Smoke detectors disabled or removed | | Yes, and a safety issue |

A lease that prohibits indoor smoking strengthens your position considerably, because it establishes that the conduct was a lease violation rather than ordinary use. It does not by itself prove the dollar amount.

## The depreciation problem, which is where most claims fail

This is the single most important thing in this article, and almost nobody gets it right.

**You can only claim the cost caused by the damage, not the full cost of a repaint you were already going to owe.** If the paint was already eight years old and at the end of its service life, the tenant did not cost you a new paint job. The tenant cost you the *extra* work smoke created on top of the repaint you owed anyway.

Interior paint has a finite useful life. Many owners and courts treat it as roughly 3 to 5 years in a rental. If the paint was nearly due regardless, a claim for the entire repaint is going to look like you are improving the property at the tenant's expense, and that is the kind of claim that gets reduced or thrown out.

So split the work. Smoke remediation genuinely has steps that a normal turnover does not, and those steps are what you claim.

**Example, with stated assumptions.** Assume a 1,400 square foot three bedroom, paint that was 4 years old at move-out, and a vendor quote broken into lines:

| Line item | Quote | Claimable | Why |
|---|---|---|---|
| Standard wall wash and prep | $350 | No | Normal turnover cost |
| Repaint, 2 coats, walls and ceilings | $2,100 | Partially | Paint was 4 of roughly 5 years through its life, so most of this was already owed |
| Shellac-based sealing primer for odor | $800 | Yes | Required only because of smoke. No smoke, no primer |
| Extra degreasing of nicotine residue | $450 | Yes | Additional labor caused by the damage |
| HVAC duct and coil cleaning | $600 | Yes | Residue in the system, not normal turnover |
| Replace smoke-saturated carpet in 2 rooms | $1,400 | Partially | Depends on carpet age and remaining life |

In this example the strong, defensible claim is the sealing primer, the extra degreasing and the HVAC cleaning, which total $1,850, plus a prorated share of the paint and carpet based on remaining useful life rather than the full replacement cost. A claim for the whole $5,700 invites an objection you will probably lose.

## Documentation that actually holds up

Claims fail on evidence far more often than on law. What we keep on every property we manage:

- **Move-in condition report with dated photos of every room**, including walls, ceilings, trim, flooring and the inside of the HVAC return. Signed by the tenant. Without a move-in baseline you cannot prove the condition changed.
- **Move-out photos from the same angles.** Matching angles is what makes a comparison persuasive instead of arguable.
- **A written vendor quote itemized into separate lines**, specifically cleaning, sealing primer, and repaint as distinct entries. One lump sum labeled "paint" is the weakest possible document, because it does not let anyone separate damage from wear.
- **The age of the paint and the flooring**, from your own records. This is what supports proration, and it is also what stops you from overclaiming.
- **A short written statement from the vendor** confirming the odor or residue required remediation beyond standard turnover. One paragraph from the person who did the work carries real weight.
- **The lease provision** on smoking, if you have one.
- **Proof of how and when you sent the notice.** Certified mail receipt or the sent email. Your deadline compliance is as important as your damage evidence.

## What about property the tenant left behind?

Separate statute, separate process. Do not throw it out.

Florida's Disposition of Personal Property Landlord and Tenant Act, Fla. Stat. 715.10 through 715.111, gives you a procedure. You must give the former tenant written notice describing the property and stating where it may be claimed and the deadline to claim it, with the notice content set out in Fla. Stat. 715.104 and 715.105. Follow that process and you get statutory protection from a later claim. Skip it and you have exposure that is completely avoidable.

Also note this is a separate matter from the deposit claim. Disposing of abandoned property does not extend your 30 day deposit notice deadline.

## How we handle this

On the properties we manage, the deposit notice is a calendared deadline from the day the tenant vacates, not a task someone remembers. The move-in report with photos exists before a tenant gets keys, because a claim you cannot document is a claim you do not have. And we ask vendors to quote smoke work in separate lines as a matter of course, so the claimable portion is obvious on the invoice rather than reconstructed later.

If you are self-managing and a tenant just moved out of a property with smoke damage, the order of operations is: photograph everything today, get an itemized quote this week, send the written notice well inside 30 days, and claim the remediation-specific lines plus a prorated share of anything with remaining useful life.

[Get a rental analysis](/rental-analysis) if you want us to look at the property, or see [what full management includes](/services).

## Frequently Asked Questions

### Can a landlord keep the entire security deposit for smoke damage?

Only if the documented, claimable damage equals or exceeds the deposit. You can claim the cost caused by the damage, not costs you already owed. If the paint was near the end of its useful life, a claim for the full repaint is likely to be reduced, because the tenant did not cause the whole expense. Claim the smoke-specific work in full and prorate anything with remaining life.

### How long does a Florida landlord have to claim a security deposit?

Thirty days after the rental agreement terminates to send written notice of intent to impose a claim, by certified mail to the tenant's last known mailing address or by email. If you are not making a claim, the deposit must be returned within 15 days. Missing the 30 day notice forfeits your right to claim the deposit at all.

### Is cigarette smoke considered normal wear and tear in Florida?

Heavy indoor smoking that leaves nicotine staining, residue in the HVAC system, or odor embedded in porous surfaces is generally damage rather than normal wear, because it goes beyond ordinary use. A faint odor with no residue on paint that was already due for replacement is much closer to wear. A lease clause prohibiting indoor smoking strengthens the claim.

### What happens if the tenant objects to the deposit claim?

The tenant has 15 days from receiving your notice to object in writing. If they object, the dispute is resolved between you, or in county court if you cannot agree. This is exactly why the itemized quote, the dated move-in and move-out photos, and the paint age records matter. They are what you would rely on.

### Can I charge the tenant for a full repaint after smoking?

Usually not the full amount. Interior paint has a limited useful life, often treated as roughly 3 to 5 years in a rental, so a tenant generally owes the portion of remaining life you lost plus any smoke-specific work such as a sealing primer or extra degreasing. Claiming a complete repaint on old paint reads as an improvement at the tenant's expense.

## Sources

- [Fla. Stat. 83.49, Deposit money or advance rent](https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0000-0099/0083/Sections/0083.49.html), for the 15 day return, the 30 day notice, the certified mail or email requirement, the tenant's 15 day objection window, and forfeiture of the right to claim.
- Fla. Stat. 715.10 through 715.111, Disposition of Personal Property Landlord and Tenant Act, with notice contents at Fla. Stat. 715.104 and 715.105.
- Fla. Stat. 83.51 and 83.52, landlord and tenant maintenance obligations.

---

*Barrett Henry is the property manager behind ViVi Property Management, serving five Tampa Bay counties with 23+ years of real estate experience. This is general information, not legal advice. Deposit disputes turn on specific facts, so confirm your situation with a Florida attorney.*"""

V2_BODY = r"""The fastest legal remedy for an unauthorized occupant in a Florida rental is the sheriff removal process created by HB 621 in 2024 and codified at Fla. Stat. 82.036. You file a verified complaint with the county sheriff, and if the statutory conditions are met the sheriff serves a notice to immediately vacate and puts you back in possession, without a court case.

The important limit: it only works for people who were **never** your tenant. A holdover tenant still requires a Chapter 83 eviction. That distinction decides which path you are on, so get it right before you file anything.

## The sheriff removal process, step by step

CS/CS/HB 621 was signed March 27, 2024 and took effect July 1, 2024, creating s. 82.036, Fla. Stat.

You submit a verified complaint to the sheriff of the county where the property sits, under penalty of perjury, attesting to all of the following:

1. You are the property owner or an authorized agent of the owner.
2. The real property being occupied includes a residential dwelling.
3. An unauthorized person or persons have unlawfully entered and remain or continue to reside on the property.
4. The property was **not** open to members of the public when they entered.
5. You have directed the unauthorized person to leave.
6. They are **not** current or former tenants under a written or oral rental agreement authorized by you.
7. They are **not** immediate family members of the owner.
8. There is no pending litigation about the property between you and any known unauthorized person.

If the sheriff verifies the complaint, the statute says the sheriff "shall, without delay, serve a notice to immediately vacate on all the unlawful occupants and shall put the owner in possession of the real property."

Two cost notes. The sheriff is entitled to the same fee as for serving a writ of possession, and if you want an officer to stand by while you change the locks, that is billed at a reasonable hourly rate set by the sheriff.

**Do not file this loosely.** A person removed under this procedure may bring an action against you and recover actual costs and damages, statutory damages equal to **triple the fair market rent** of the dwelling, court costs, and reasonable attorney fees. If there is any argument the occupant was ever a tenant, use the eviction process instead and talk to an attorney first.

Our [Florida landlord-tenant law guide](/blog/florida-landlord-tenant-law-guide) covers the eviction path for actual tenants.

## Register a trespass authorization with your sheriff

This is the step that turns a vacant property from a judgment call into a clear one, and almost nobody does it.

Most Florida sheriff's offices accept a trespass authorization, sometimes called a trespass affidavit or a no-trespass agreement, from a property owner. You file it for the specific address and it authorizes deputies to act on trespass at that property without having to reach you first for permission.

Why it is worth the paperwork: at 2 a.m., a deputy responding to a call at a vacant house has to establish whether anyone present has permission to be there. With an authorization on file, that question is already answered. Without one, the default is often to leave and tell you to follow up during business hours, which is how an overnight trespass becomes a weeks-long occupancy.

Call the non-emergency line for the sheriff's office covering the property, ask for the trespass authorization form, and renew it when it expires. Hillsborough, Pinellas, Pasco, Polk and Manatee each handle it slightly differently, so ask about that specific county.

## Cameras: what actually works on a vacant property

The problem with a vacant rental is that there is no internet and often no power. That rules out most consumer cameras, which assume both.

| Option | How it powers and connects | Best for | Watch out for |
|---|---|---|---|
| **Cellular trail camera** | Batteries plus a cellular data plan | Driveways, entry points, long vacancies with no utilities | Still images or short clips, not live view. Data plan is a monthly cost. Battery life drops in heat |
| **Solar 4G camera** | Solar panel plus battery, cellular data | Longer vacancies where you want live view and no battery swaps | Needs real sun exposure. A north-facing install under a tree will not keep up. Panels get stolen if mounted low |
| **Wi-Fi camera on a hotspot** | AC power plus a cellular hotspot | Properties with power on, shorter vacancies | Two failure points instead of one. A hotspot reboot loop means no coverage and no alert that you lost coverage |

My practical advice: if the power is off, use cellular or solar cellular. Do not try to make a Wi-Fi camera work with no power. If the power is on, a hotspot plus a wired camera is cheaper and gives you live view, but set up an alert for when the camera goes offline, because silent failure is the real risk.

Whatever you choose, mount it high enough to be inconvenient to reach, point one camera at the primary door and one at the driveway, and confirm you are actually getting notifications on your phone before you leave the property.

## Signage, entry points and utilities

**Signage.** Post no trespassing signage at the property. It is cheap, and it matters because it removes the argument that someone believed they had permission to be there. It also supports the statutory condition that the property was not open to the public.

**Entry points.** This is unglamorous and it is most of the actual protection:

- Re-key every exterior lock between tenants. Not just the front door.
- Secure the sliding doors. A security bar or a pin in the track defeats the most common forced entry on Florida rentals.
- Check the garage. A garage with an opener and no interior deadbolt on the house door is a soft spot. Unplug the opener and lock the interior door.
- Secure windows, especially bathroom and rear windows out of street view.
- Install a lockbox you control, and account for every key. The most common unauthorized entry is not forced at all, it is a key someone still has.

**Utilities.** Keep power and water on. Owners want to shut them off to save money, and it backfires. Without power you have no cameras, no alarm, and no air conditioning, and in Florida a closed-up house with no AC grows mold in weeks. Without water you cannot have anything inspected or shown. Keeping utilities on is also evidence the property is actively maintained rather than abandoned.

## The insurance clause owners miss

Read your policy's vacancy provision before the house sits empty.

Most homeowners and landlord policies restrict or suspend coverage once a property has been vacant for a set period, commonly 30 or 60 consecutive days. Vandalism, theft and water damage are usually the first coverages to go. So the exact risks that rise when a property is empty are often the ones your policy stops covering while it is empty.

Call your agent **before** the vacancy starts and ask for a vacancy permit endorsement or a vacant dwelling policy. It costs more. It costs dramatically less than an uncovered vandalism loss. And mention any period the property was already vacant, because a claim denial based on a vacancy clause is a bad way to learn the term was 30 days rather than 60.

## The practical checklist

Work it in this order:

1. Re-key all exterior locks and account for every key.
2. Secure sliders, garage and rear windows.
3. Post no trespassing signage.
4. File a trespass authorization with the county sheriff.
5. Keep power and water on.
6. Install cellular or solar cellular cameras at the door and driveway, and verify alerts on your phone.
7. Call your insurance agent about a vacancy endorsement.
8. Have someone physically check the property weekly, inside and out.
9. Keep the lawn maintained and the mail stopped. A property that looks watched is a property that gets skipped.

Step 8 is the one people drop first and the one that catches problems while they are still small. Our [preventive maintenance guide](/blog/preventive-maintenance-saves-florida-rental-owners-thousands) covers what to look for on those walkthroughs.

## How we handle vacant properties

For the properties we manage, a vacancy means weekly physical inspection, utilities stay on, locks get re-keyed between tenants as standard practice, and the goal is to keep the vacancy short in the first place, because an occupied property with a screened tenant is the best squatter prevention there is.

[Get a rental analysis](/rental-analysis) if you have a property sitting empty, or see [what full management includes](/services).

## Frequently Asked Questions

### How do I remove a squatter in Florida?

Use the sheriff removal process under Fla. Stat. 82.036, created by HB 621 in 2024. File a verified complaint with the county sheriff attesting to eight conditions, including that the occupant was never a tenant and is not an immediate family member. If verified, the sheriff serves a notice to immediately vacate and restores possession without a court case. Anyone who was ever a tenant requires a Chapter 83 eviction instead.

### Does the 2024 Florida squatter law work on a former tenant?

No. The process explicitly requires that the unauthorized persons are not current or former tenants under a written or oral rental agreement authorized by the owner. A holdover tenant, or anyone you ever rented to, must be removed through eviction. Filing a sheriff complaint against a former tenant exposes you to damages of triple the fair market rent plus costs and attorney fees.

### What is a trespass authorization and do I need one?

It is a form filed with your county sheriff authorizing deputies to enforce trespass at a specific address without contacting you first for permission. For a vacant rental it is worth the paperwork, because it lets a deputy responding at night act immediately rather than deferring until they can reach the owner. Each sheriff's office handles the form slightly differently, so ask the one covering your property.

### What kind of camera works on a property with no power?

A cellular trail camera running on batteries, or a solar 4G camera, since both avoid needing AC power and local Wi-Fi. Trail cameras send still images or short clips rather than live video. Solar cameras give live view but need genuine sun exposure to keep up. A Wi-Fi camera on a hotspot needs power and adds a second failure point.

### Does my insurance cover a vacant rental property?

Often not fully. Most homeowners and landlord policies restrict or suspend coverage once a property has been vacant for a set period, commonly 30 or 60 consecutive days, and vandalism, theft and water damage are typically the first to go. Ask your agent for a vacancy permit endorsement or a vacant dwelling policy before the vacancy begins.

## Sources

- [Fla. Stat. 82.036, Removal of unauthorized persons from residential real property](https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0000-0099/0082/Sections/0082.036.html), for the eight complaint conditions, the sheriff's duty to serve a notice to immediately vacate without delay, the fee provisions, and the treble fair market rent damages for wrongful use.
- [Florida Senate 2024 bill summary, CS/CS/HB 621](https://www.flsenate.gov/Committees/BillSummaries/2024/html/621), for the creation of s. 82.036 and the July 1, 2024 effective date.
- Fla. Stat. 95.16 and 95.18, adverse possession, which requires seven years of possession in Florida.
- Fla. Stat. ch. 83 part II, Florida Residential Landlord and Tenant Act, for the eviction process that applies to actual tenants.

---

*Barrett Henry is the property manager behind ViVi Property Management, serving five Tampa Bay counties with 23+ years of real estate experience. This is general information, not legal advice. Removing an occupant has real legal risk if you pick the wrong process, so confirm your situation with a Florida attorney.*"""


POSTS = [
    {
        "id": "static-11",
        "slug": "security-deposit-smoke-damage-florida",
        "title": "Can a Florida landlord keep a deposit for smoke damage?",
        "excerpt": (
            "Yes, for the part that is genuinely damage rather than normal wear, and only if "
            "written notice goes out within 30 days. Here is how to document and prorate it."
        ),
        "published_at": "2026-10-08T09:00:00Z",
        "category": "Legal",
        "read_time": "9 min read",
        "body": V1_BODY,
    },
    {
        "id": "static-12",
        "slug": "protect-vacant-rental-squatters-florida",
        "title": "How do I protect a vacant rental from squatters in Florida?",
        "excerpt": (
            "Florida's 2024 sheriff removal process, trespass authorizations, which cameras work "
            "with no power, and the insurance vacancy clause most owners miss."
        ),
        "published_at": "2026-10-08T09:30:00Z",
        "category": "Legal",
        "read_time": "10 min read",
        "body": V2_BODY,
    },
]


def ts_literal(body):
    """
    Escape a markdown body for a TypeScript template literal.
    Backticks and ${ would both terminate or interpolate the literal.
    """
    if "`" in body:
        body = body.replace("`", "\\`")
    if "${" in body:
        body = body.replace("${", "\\${")
    return body


def build_record(p):
    return (
        "  {\n"
        f'    id: "{p["id"]}",\n'
        f'    slug: "{p["slug"]}",\n'
        f'    title: "{p["title"]}",\n'
        "    excerpt:\n"
        f'      "{p["excerpt"]}",\n'
        "    hero_image_url: null,\n"
        "    hero_image_credit: null,\n"
        f'    published_at: "{p["published_at"]}",\n'
        '    status: "published",\n'
        f'    category: "{p["category"]}",\n'
        f'    read_time: "{p["read_time"]}",\n'
        f"    body_mdx: `{ts_literal(p['body'])}`,\n"
        "  },\n"
    )


def main():
    with open(TARGET, encoding="utf-8") as fh:
        src = fh.read()

    anchor = "export const STATIC_BLOG_POSTS: BlogPost[] = [\n"
    if anchor not in src:
        sys.exit("Could not find STATIC_BLOG_POSTS array opening")

    added = []
    block = ""
    for p in POSTS:
        if f'slug: "{p["slug"]}"' in src:
            print("Already present, skipping: %s" % p["slug"])
            continue
        block += build_record(p)
        added.append(p["slug"])

    if not block:
        print("Nothing to insert.")
        return

    src = src.replace(anchor, anchor + block, 1)

    with open(TARGET, "w", encoding="utf-8") as fh:
        fh.write(src)

    for slug in added:
        p = next(x for x in POSTS if x["slug"] == slug)
        words = len(re.sub(r"\[([^\]]+)\]\([^)]*\)", r"\1", p["body"]).split())
        print("Inserted %s" % slug)
        print("  title: %d chars | excerpt: %d chars | words: %d"
              % (len(p["title"]), len(p["excerpt"]), words))


if __name__ == "__main__":
    main()
