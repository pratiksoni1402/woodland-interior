import MainBanner from '@/app/home/components/banner';
import CustomService from '@/app/home/components/custom-service';
import ExpertTeam from '@/app/home/components/expert-team';
import OurWarehouse from '@/app/home/components/our-warehouse';
import Visitshop from '@/app/home/components/visit-us';
export default function Homepage() {
	return (
		<div className="homepage bg-background">
			<MainBanner />

			<Visitshop />

			<OurWarehouse />

			<ExpertTeam />

			<CustomService />
		</div>
	);
}
