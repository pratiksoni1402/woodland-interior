export default function ChangeLogs(){
  return(
    <div className="change-logs-page bg-primary-foreground">
      <div className="container">
        <div className="content-wrapper">
          <section>
            <h1 className="text-center font-crimson text-4xl py-5 text-primary">Project Improvisations</h1>
          </section>
          <section>
            <h3 className=" font-crimson text-2xl text-primary">Intial Release (V1.0.0) (29/02/2024)</h3>
            <ul className="list-inside list-disc pl-5 text-primary font-roboto pt-2 pb-5">
              <li>Hosting project on Vercel</li>
            </ul>
          </section>
          <section>
            <h3 className=" font-crimson text-2xl text-primary">Responsiveness Issue (V1.0.1) (10/03/2024)</h3>
            <ul className="list-inside list-disc pl-5 text-primary font-roboto pt-2 pb-5">
              <li>Issue related to responsiveness on listing page solved</li>
              <li>Replacing font with next/font for better optimization</li>
            </ul>
          </section>
          <section>
            <h3 className=" font-crimson text-2xl text-primary">Database Migration (V1.0.2) (25/03/2024)</h3>
            <ul className="list-inside list-disc pl-5 text-primary font-roboto pt-2 pb-5">
              <li>Database migrated to other platform because of some issue</li>
              <li>Made minor change in code acording to new db provider</li>
            </ul>
          </section>
          <section>
            <h3 className=" font-crimson text-2xl text-primary">Bug in Update Password and edit profile (V1.1.2) (09/04/2024)</h3>
            <ul className="list-inside list-disc pl-5 text-primary font-roboto pt-2 pb-5">
              <li>Bug in update password solved (bug was - showing password updated successfully even if old password is wrong)</li>
              <li>Issue related to profile update solved (bug was - if you have created account then you cant update it for the fitst time and i have to insert data in db manually)</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}