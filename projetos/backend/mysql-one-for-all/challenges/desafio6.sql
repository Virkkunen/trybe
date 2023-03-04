SELECT
	MIN(plans.price) AS faturamento_minimo,
    MAX(plans.price) AS faturamento_maximo,
    ROUND(AVG(plans.price), 2) AS faturamento_medio,
    ROUND(SUM(plans.price), 2) AS faturamento_total
FROM SpotifyClone.plans JOIN SpotifyClone.users ON plans.plan_id = users.plan_id;