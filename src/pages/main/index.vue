<template>
	<div class="action">
		<button class="button-custom" @click="changeProject">换一个项目</button>
		<div class="group">
			<svg viewBox="0 0 24 24" aria-hidden="true" class="icon">
				<g>
					<path
						d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
					></path>
				</g>
			</svg>
			<input v-model="search.stars" class="input" type="search" placeholder="Search" />
		</div>
		<p class="tips">默认搜索大于1000星星的项目</p>
	</div>
	<loading-comp v-if="isLoading" />
	<div v-else class="section_our_solution">
		<div class="row">
			<div class="col-lg-12 col-md-12 col-sm-12">
				<div class="our_solution_category">
					<div class="solution_cards_box">
						<div class="solution_card">
							<div class="hover_color_bubble"></div>
							<div class="so_top_icon">
								<img src="@/assets/images/github.svg" alt="" />
							</div>
							<div class="solu_title">
								<div>{{ data.name }}</div>
							</div>
							<div class="solu_description">
								<p>
									{{ data.description }}
								</p>
								<div class="tags">
									<div class="tags-item">
										<img src="@/assets/images/star.svg" alt="" />
										<div>Star: {{ data.stars }}</div>
									</div>
								</div>
								<button type="button">查看详情</button>
								<button type="button" @click="onJumpProject">前往仓库地址</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" src="./index.ts"></script>
<style src="./index.css" scoped></style>
