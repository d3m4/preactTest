import { h, Component } from 'preact';
import style from './style';

export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>
				<div class="container">
					<div class="row">
						{shots.map((item, i) => (
							<div class="col-xs-12 col-sm-6 col-md-4" key={i}>
								<div class={style.box}>
									<a href={item.html_url} target="_blank" class={style.title}>
										<img src={item.images.hidpi || item.images.normal || item.images. teaser} />
									</a>
									<a href={item.html_url} target="_blank" class={style.title}>{item.title}</a>
									<div class={style.userprofile}>
										<img src={item.user.avatar_url} />
										<a target="_blank" href={item.user.html_url}>
											{item.user.name}
										</a>
									</div>
								</div>
							</div>
						))}					
				</div>
			</div>
		);
	}
}
