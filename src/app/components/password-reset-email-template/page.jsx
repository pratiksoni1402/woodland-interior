import { Lock, Mail, Shield } from 'lucide-react';
import WoodlandLogo from '@/icons/footer-logo';
import React from 'react';

export default function PasswordResetEmailTemplate({
	resetLink,
	firstName,
	lastName,
}) {
	return (
		<div className="min-h-screen bg-border/25 pb-12 pt-3">
			<div className="container mx-auto px-4">
				<div className="max-w-2xl mx-auto bg-card font-sans rounded-md">
					{/* Main Content */}
					<div className="px-8 py-10 bg-card rounded-md">
						<div className="text-center mb-8">
							<div className="w-32 h-32 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
								<WoodlandLogo width={300} height={360} />
							</div>
							<h2 className="text-3xl font-medium text-primary font-crimson mb-2 text-balance">
								Reset Your Password
							</h2>
							<p className="text-lg text-muted-foreground text-pretty">
								{'Hi '}
								<span className="font-semibold text-card-foreground">
									{firstName} {lastName}
								</span>
								{', we received a request to reset your password.'}
							</p>
						</div>

						{/* Instructions */}
						<div className="bg-background rounded-2xl p-6 mb-8 border border-border">
							<div className="flex items-start gap-4">
								<div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
									<Mail className="w-4 h-4 text-primary" />
								</div>
								<div>
									<h3 className="font-semibold text-card-foreground mb-2">
										Follow these simple steps:
									</h3>
									<ol className="space-y-2 text-muted-foreground">
										<li className="flex items-start gap-2">
											<span className="w-5 h-5 bg-accent text-accent-foreground rounded-full text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-semibold">
												1
											</span>
											<span>
												Click the &#34;Reset Password&#34; button below
											</span>
										</li>
										<li className="flex items-start gap-2">
											<span className="w-5 h-5 bg-accent text-accent-foreground rounded-full text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-semibold">
												2
											</span>
											<span>Enter your new secure password</span>
										</li>
										<li className="flex items-start gap-2">
											<span className="w-5 h-5 bg-accent text-accent-foreground rounded-full text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-semibold">
												3
											</span>
											<span>Confirm and save your changes</span>
										</li>
									</ol>
								</div>
							</div>
						</div>

						{/* CTA Button */}
						<div className="text-center mb-8">
							<div className="inline-block">
								<p>
									Click{' '}
									<a
										href={resetLink}
										className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 rounded-2xl duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-transform"
										style={{ textDecoration: 'none' }}
									>
										<Lock className="w-5 h-5" />
										here
									</a>{' '}
									to reset your password.
								</p>
							</div>
						</div>

						{/* Security Notice */}
						<div className="bg-muted/50 rounded-2xl p-6 border border-border">
							<div className="flex items-start gap-3">
								<Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
								<div className="text-sm">
									<p className="font-semibold text-card-foreground mb-1">
										Security Notice
									</p>
									<p className="text-muted-foreground leading-relaxed">
										If you didn&apos;t request this password reset, please
										ignore this email. Your password will remain unchanged. This
										link will expire in 15 minutes for your security.
									</p>
								</div>
							</div>
						</div>

						{/* Alternative Link */}
						<div className="mt-6 p-4 bg-background rounded-xl border border-border">
							<p className="text-sm text-muted-foreground text-center">
								{
									'Having trouble with the button? Copy and paste this link into your browser:'
								}
							</p>
							<p className="text-xs text-primary font-mono mt-2 p-2 bg-card rounded border break-all">
								{resetLink}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
